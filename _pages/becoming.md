---
permalink: /becoming/
title: Becoming
layout: single
published: true
sitemap: false
author_profile: false
becoming_view: overview
---

<link
  rel="stylesheet"
  href="{{ '/assets/css/becoming.css' | relative_url }}"
>

<link
  rel="stylesheet"
  href="{{ '/assets/css/becoming-daily.css' | relative_url }}"
>

{% include becoming/app.html %}

{% include becoming/daily.html %}

{% assign becoming_cache = site.github.build_revision | default: site.time %}

<script
  src="{{ '/assets/js/becoming.js' | relative_url }}?v={{ becoming_cache | date: '%s' }}"
  defer
></script>

<script
  src="{{ '/assets/js/becoming-daily.js' | relative_url }}?v={{ becoming_cache | date: '%s' }}"
  defer
></script>
