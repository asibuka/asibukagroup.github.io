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

<div id="infinite-container" class="hide-on-embed post-containers" itemscope itemtype="https://schema.org/ItemList"></div>

<div id="infinite-loader" class='loading-spinner' style="min-height:40px"></div>
<script>
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("infinite-container");
  const loader = document.getElementById("infinite-loader");

  const PER_PAGE = 5;
  let index = 0;
  let posts = [];

  try {
    const res = await fetch("/statics.json");
    posts = await res.json();
  } catch (e) {
    console.error(e);
    return;
  }

  const lazyImageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.classList.remove("lazy");
        lazyImageObserver.unobserve(img);
      }
    });
  }, { rootMargin: "300px" });

  function refreshLazyImages() {
    document.querySelectorAll("img.lazy[data-src]").forEach(img => {
      if (!img.dataset.observed) {
        img.dataset.observed = "1";
        lazyImageObserver.observe(img);
      }
    });
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
        <div class="post-image" itemscope itemtype="https://schema.org/ImageObject">
          <a href="${post.url}" title="${post.title}" itemprop="url">
            <img
              class="lazy"
              data-src="${post.image || ""}"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              alt="${post.title || ""}"
              title="${post.title || ""}"
              width="1600"
              height="900"
              itemprop="contentUrl">
          </a>
        </div>

        <div class="post-content">
          <h2><a href="${post.url}" itemprop="name">${post.title}</a></h2>
          <p class="author"><strong>Author:</strong> ${post.author || ""}</p>
          <p class="summary" itemprop="description">${post.description || ""}</p>
        </div>
      `;

      container.appendChild(article);
    });

    index += PER_PAGE;
    refreshLazyImages();

    if (index >= posts.length) {
      observer.disconnect();
      loader.remove();
    }
  }

  const observer = new IntersectionObserver(
    entries => entries[0].isIntersecting && renderBatch(),
    { rootMargin: "400px" }
  );

  renderBatch();
  observer.observe(loader);
});
</script>
