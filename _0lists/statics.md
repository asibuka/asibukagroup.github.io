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

{% for item in paginator.posts %}
  <h2><a href="{{ item.url }}">{{ item.title }}</a></h2>
  <p>{{ item.description }}</p>
{% endfor %}
