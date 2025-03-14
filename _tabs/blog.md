---
layout: blog
title: المدونة
icon: fas fa-pen-fancy
order: 9
---

# آخر المقالات والمنشورات

هنا ستجد آخر المقالات والمنشورات التي قمت بكتابتها في مختلف المجالات.

<div class="blog-container">
  {% for post in site.posts %}
  <div class="blog-post">
    <div class="blog-image">
      {% if post.image.path %}
      <img src="{{ post.image.path | relative_url }}" alt="{{ post.image.alt | default: 'صورة المقال' }}">
      {% else %}
      <img src="/assets/img/blog/default-post.jpg" alt="صورة المقال">
      {% endif %}
    </div>
    <div class="blog-content">
      <h2 class="blog-title">{{ post.title }}</h2>
      <div class="blog-meta">
        <span class="blog-date"><i class="fas fa-calendar-alt"></i> {{ post.date | date: "%d %b %Y" }}</span>
        {% if post.categories.size > 0 %}
        <span class="blog-category"><i class="fas fa-folder"></i> 
          {% for category in post.categories %}
            {{ category }}{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </span>
        {% endif %}
      </div>
      <p class="blog-excerpt">
        {% if post.excerpt %}
          {{ post.excerpt | strip_html | truncatewords: 30 }}
        {% else %}
          {{ post.content | strip_html | truncatewords: 30 }}
        {% endif %}
      </p>
      <a href="{{ post.url | relative_url }}" class="blog-read-more">قراءة المزيد <i class="fas fa-arrow-left"></i></a>
    </div>
  </div>
  {% endfor %}
</div>

{% if site.posts.size > 0 %}
<div class="blog-pagination">
  {% if paginator.previous_page %}
  <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-prev"><i class="fas fa-chevron-right"></i> السابق</a>
  {% else %}
  <a href="#" class="pagination-prev disabled"><i class="fas fa-chevron-right"></i> السابق</a>
  {% endif %}
  
  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
    <a href="#" class="pagination-page active">{{ page }}</a>
    {% else %}
    <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}" class="pagination-page">{{ page }}</a>
    {% endif %}
  {% endfor %}
  
  {% if paginator.next_page %}
  <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-next">التالي <i class="fas fa-chevron-left"></i></a>
  {% else %}
  <a href="#" class="pagination-next disabled">التالي <i class="fas fa-chevron-left"></i></a>
  {% endif %}
</div>
{% endif %}

## المواضيع الشائعة

<div class="popular-topics">
  {% assign categories = site.categories | sort %}
  {% for category in categories %}
    <a href="{{ '/categories/' | append: category[0] | downcase | replace: ' ', '-' | relative_url }}" class="topic-tag">{{ category[0] }}</a>
  {% endfor %}
</div>

<style>
.blog-container {
  margin-bottom: 40px;
}

.blog-post {
  display: flex;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.blog-post:hover {
  transform: translateY(-5px);
}

.blog-image {
  flex: 0 0 250px;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  flex: 1;
  padding: 20px;
}

.blog-title {
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--heading-color);
}

.blog-meta {
  margin-bottom: 15px;
  color: #6c757d;
  font-size: 0.9rem;
}

.blog-meta span {
  margin-left: 15px;
}

.blog-meta i {
  margin-left: 5px;
}

.blog-excerpt {
  margin-bottom: 15px;
}

.blog-read-more {
  display: inline-block;
  color: var(--link-color);
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-read-more:hover {
  color: var(--link-hover-color);
  text-decoration: none;
}

.blog-read-more i {
  margin-right: 5px;
}

.blog-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.pagination-prev,
.pagination-next,
.pagination-page {
  display: inline-block;
  padding: 8px 15px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: #f8f9fa;
  color: #495057;
  text-decoration: none;
  transition: all 0.3s ease;
}

.pagination-page.active {
  background-color: var(--link-color);
  color: white;
}

.pagination-prev.disabled,
.pagination-next.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-prev:not(.disabled):hover,
.pagination-next:not(.disabled):hover,
.pagination-page:not(.active):hover {
  background-color: #e9ecef;
}

.popular-topics {
  margin-top: 20px;
}

.topic-tag {
  display: inline-block;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 20px;
  background-color: #f8f9fa;
  color: #495057;
  text-decoration: none;
  transition: all 0.3s ease;
}

.topic-tag:hover {
  background-color: var(--link-color);
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .blog-post {
    flex-direction: column;
  }
  
  .blog-image {
    flex: 0 0 200px;
  }
}
</style> 