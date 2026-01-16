---
layout: default
title: Pages
description: Kumpulan artikel statis dari ASIBUKA Blog.
permalink: /page/
pagination:
  enabled: true
  collection: statics
  per_page: 3
  permalink: /page/:num/
---

<h1 class="main-heading">{{ page.title }}</h1>
<p class="text-center">{{ page.description }}</p>

<p>DEBUG {{ paginator.posts | size }}</p>

<div class="post-containers">
{% for item in paginator.posts %}
  <article class="post-container">
    <h2><a href="{{ item.url }}">{{ item.title }}</a></h2>
    <p>{{ item.description }}</p>
  </article>
{% endfor %}
</div>

<nav class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}">← Prev</a>
  {% endif %}
  <span>Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}">Next →</a>
  {% endif %}
</nav>
