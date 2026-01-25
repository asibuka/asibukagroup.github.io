---
layout: default
title: ASIBUKA Group
description: ASIBUKA Group adalah usaha yang bergerak di bidang investasi di bidang UMKM baik offline maupun online, berbasis teknologi ataupun konvensional.
author: ASIBUKA Group
url: https://www.asibuka.com
image: https://www.asibuka.com/assets/img/ASIBUKA-Blue.webp
permalink: /
keywords: ASIBUKA, ASIBUKA Group, Bisnis, Investasi, UMKM
robots: index, follow
lang: id
---
<h1 class='main-heading'>{{ page.title }}</h1>
<p>{{ page.description }}</p>
{% include image.html src="https://www.asibuka.com/assets/img/ASIBUKA-Blue.webp" width="800" height="800" layout="responsive" title="Logo" fetchpriority="high" %}
{% for post in paginator.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}

<nav>
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}">Previous</a>
  {% endif %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}">Next</a>
  {% endif %}
</nav>