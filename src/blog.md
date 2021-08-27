---
title: 'Blog'
layout: 'layouts/blog.html'
socialImage: "https://jaydnedwards.com/images/social.jpg"
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

# This is my blog <span class="[ emoji ]" aria-hidden="true">📝</span>

I'll be posting my writing here, but there's no set theme. You're probably going to see a mix of design and development talk, with hints of my life sprinkled in.