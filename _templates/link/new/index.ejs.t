---
to: src/content/links/<%= h.changeCase.param(title) %>/index.mdx
sh: "git checkout -b content/<%= h.changeCase.param(title) %>"
---
---
title: <%= title %>
linkUrl: <%= linkUrl %>
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
originalUrl: https://anglepoised.com/notes/<%= h.changeCase.param(title) %>/
source: astro
tags:
  - "tag"
---

Comments on the link.
