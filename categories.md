---
layout: page
title: التصنيفات
permalink: /categories/
---

<div class="categories-page">
  <h1>تصنيفات المدونة</h1>
  
  {% for category in site.categories %}
  <div class="category-section" id="{{ category[0] | slugify }}">
    <h2>{{ category[0] }}</h2>
    <ul class="post-list">
      {% for post in category[1] %}
        <li>
          <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
          <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
          </h3>
        </li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</div> 