---
layout: default
title: Pages
description: Kumpulan artikel statis dari ASIBUKA Blog.
robots: index, follow
permalink: /page/
keywords: pages, statis, resmi
lang: id
toc: false
pagination:
  enabled: true
  collection: statics
  per_page: 3
  permalink: /page/page/:num/
---
<h1 class="main-heading" id='EmbedTitle'>{{ page.title }}</h1>
<p class='text-center hide-on-embed'>{{ page.description }}</p>
<div id='EmbedResult'></div>
<div class='hide-on-embed post-containers' itemscope itemtype="https://schema.org/ItemList">
{% for item in paginator.posts %}
<article class="post-container" itemscope itemtype="https://schema.org/ListItem" itemprop="itemListElement">
<meta itemprop="position" content="{{ forloop.index }}">
<div class="post-image">
<a href="{{ item.url }}" title="{{ item.title }}" itemprop="url">
{% include image-lazy.html src=item.image title=item.title width="1600" height="900" layout="responsive"
%}
</a>
</div>
<div class="post-content">
<a href="{{ item.url }}" title="{{ item.title }}">
<h2 itemprop="name">{{ item.title }}</h2>
</a>
<p class="author" itemprop="author creator" itemtype="https://schema.org/Organization" itemscope>
<strong>Author:</strong> <span itemprop="name">{{ item.author }}</span>
</p>
<p class="summary" itemprop="description">{{ item.description }}</p>
</div>
</article>
{% endfor %}
<nav class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}">← Prev</a>
  {% endif %}

  <span>Page {{ paginator.page }} of {{ paginator.total_pages }}</span>

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}">Next →</a>
  {% endif %}
</nav>
</div>
