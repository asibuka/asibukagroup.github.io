---
layout: default
title: Pages
permalink: /page/
pagination:
  enabled: true
  collection: statics
  per_page: 3
  permalink: /page/:num/
  sort_field: title
  sort_reverse: false
---
<div id="infinite-container"></div>
<div id="infinite-loader">Loading…</div>
<script>
  document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("infinite-container");
  const loader = document.getElementById("infinite-loader");

  const STEP = 10;
  let index = 0;
  let items = [];

  try {
    const res = await fetch("/statics.json");
    items = await res.json();
  } catch (e) {
    loader.textContent = "Failed to load content";
    return;
  }

  function renderNext() {
    const slice = items.slice(index, index + STEP);

    slice.forEach(item => {
      const el = document.createElement("article");
      el.className = "post-container";
      el.innerHTML = `
        <h2><a href="${item.url}">${item.title}</a></h2>
        <p>${item.description || ""}</p>
      `;
      container.appendChild(el);
    });

    index += STEP;

    if (index >= items.length) {
      loader.remove();
      observer.disconnect();
    }
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    renderNext();
  }, { rootMargin: "200px" });

  renderNext();
  observer.observe(loader);
});
  </script>