---
layout: page
title: الوسوم
permalink: /tags/
---

<div class="tags-page">
  <h1>وسوم المدونة</h1>
  
  {% assign tags = site.tags | sort %}
  <div class="tag-cloud">
    {% for tag in tags %}
      <a href="#{{ tag[0] | slugify }}" class="tag-link" style="font-size: {{ tag[1].size | times: 4 | plus: 80 }}%">
        {{ tag[0] }} <span>({{ tag[1].size }})</span>
      </a>
    {% endfor %}
  </div>
  
  <div class="tag-list">
    {% for tag in tags %}
    <div class="tag-section" id="{{ tag[0] | slugify }}">
      <h2>{{ tag[0] }}</h2>
      <ul class="post-list">
        {% for post in tag[1] %}
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
</div> 