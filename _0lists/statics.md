---
layout: default
title: Pages
permalink: /page/
description: Kumpulan artikel resmi dari ASIBUKA Blog.
keywords: page, halaman resmi
robots: index, follow
lang: id
toc: false
---
<h1 class="main-heading" id="EmbedTitle">{{ page.title }}</h1>
<p class="text-center hide-on-embed">{{ page.description }}</p>

<div
  id="infinite-container"
  class="hide-on-embed post-containers"
  itemscope
  itemtype="https://schema.org/ItemList">
</div>

<div id="infinite-loader" style="height:1px"></div>
<script>
  document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("infinite-container");
  const loader = document.getElementById("infinite-loader");

  const PER_PAGE = 10;
  let index = 0;
  let posts = [];

  try {
    const res = await fetch("/statics.json");
    posts = await res.json();
  } catch (err) {
    console.error("Failed to load JSON", err);
    return;
  }

  function renderBatch() {
    const slice = posts.slice(index, index + PER_PAGE);

    slice.forEach((post, i) => {
      const position = index + i + 1;

      const article = document.createElement("article");
      article.className = "post-container";
      article.setAttribute("itemscope", "");
      article.setAttribute("itemtype", "https://schema.org/ListItem");
      article.setAttribute("itemprop", "itemListElement");

      article.innerHTML = `
        <meta itemprop="position" content="${position}">

        <div class="post-image">
          <a href="${post.url}" title="${post.title}" itemprop="url">
            <img
              src="${post.image || ""}"
              alt="${post.title || ""}"
              loading="lazy"
              width="1600"
              height="900">
          </a>
        </div>

        <div class="post-content">
          <h2>
            <a href="${post.url}" title="${post.title}" itemprop="name">
              ${post.title}
            </a>
          </h2>

          <p class="author">
            <strong>Author:</strong>
            <span itemprop="author" itemscope itemtype="https://schema.org/Organization">
              <span itemprop="name">${post.author || ""}</span>
            </span>
          </p>

          <p class="summary" itemprop="description">
            ${post.description || ""}
          </p>
        </div>
      `;

      container.appendChild(article);
    });

    index += PER_PAGE;

    if (index >= posts.length) {
      observer.disconnect();
      loader.remove();
    }
  }

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) renderBatch();
    },
    { rootMargin: "300px" }
  );

  renderBatch();
  observer.observe(loader);
});
</script>