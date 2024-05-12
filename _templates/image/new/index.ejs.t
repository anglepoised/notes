---
to: src/content/images/<%= h.changeCase.param(title) %>/index.mdx
sh: "git checkout -b content/<%= h.changeCase.param(title) %>"
---
---
title: <%= title %>
description:
image:
  alt:
  src:
  target:
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
originalUrl: https://anglepoised.com/notes/<%= h.changeCase.param(title) %>/
source: astro
tags:
 - "tag"
---

Comments on the image.
