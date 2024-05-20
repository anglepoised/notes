---
to: src/content/links/<%= h.changeCase.param(title) %>/index.mdx
sh: "<%= createBranch ? `git checkout -b content/${h.changeCase.param(title)}` : 'echo Skipping branch creation' %>"
---
---
title: <%= title %>
description: ""
linkUrl: <%= linkUrl %>
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
originalUrl: https://anglepoised.com/notes/<%= h.changeCase.param(title) %>/
source: astro
tags:
  - "tag"
---

Comments on the link.
