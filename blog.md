---
layout: default
title: Blog
permalink: /blog/
---

Posts

{% for post in site.posts %}
{{ post.date | date: "%b %-d, %Y" }}
{{ post.title }}

{% endfor %}
