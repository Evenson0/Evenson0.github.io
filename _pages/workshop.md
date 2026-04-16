---
layout: single
title: "Mathematical Workshop"
permalink: /workshop/
author_profile: true
---

A recurring series of mathematical problems, short explorations, and elegant solutions.

{% assign workshop_posts = site.posts | where: "series", "mathematical-workshop" | sort: "date" | reverse %}

{% for post in workshop_posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
  {% if post.excerpt %}
    <p>{{ post.excerpt }}</p>
  {% endif %}
{% endfor %}
