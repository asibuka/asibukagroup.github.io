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

<div id="infinite-loader" class='loading-spinner'></div>
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
        <div class="post-image" itemscope itemtype="https://schema.org/ImageObject">
          <a href="${post.url}" title="${post.title}" itemprop="url">
            <img
              data-src="${post.image || ""}"
              itemprop="contentUrl"
              class="lazy"
              alt="${post.title || ""}"
              title="${post.title || ""}"
              loading="lazy"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
              width="1600"
              height="900">
          </a>
          <span itemprop="creator author" itemtype="https://schema.org/Organization" itemscope>
          <meta itemprop="name" content="ASIBUKA Group" /></span>
          <meta itemprop="url" content="https://asibuka.com/assets/img/ASIBUKA-Blue.webp' }}" />
          <meta itemprop="width" content="1600" />
          <meta itemprop="height" content="900" />
          <meta itemprop="description" content="${post.title || ""}" />
          <meta itemprop="license" content="https://www.asibuka.com/hak-cipta/" />
          <meta itemprop="creditText copyrightNotice acquireLicensePage" content="https://www.asibuka.com/hak-cipta/" />
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