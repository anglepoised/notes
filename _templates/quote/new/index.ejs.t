---
to: src/content/quotes/<%= h.changeCase.param(title) %>/index.mdx
sh: "git checkout -b content/<%= h.changeCase.param(title) %>"
---
---
title: <%= title %>
description:
quote:
  url:
  work:
  author:
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
originalUrl: https://anglepoised.com/notes/<%= h.changeCase.param(title) %>/
source: astro
tags:
  - "tag"
---

He took a duck in the face at 250 knots.
