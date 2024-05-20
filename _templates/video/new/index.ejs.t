---
to: src/content/videos/<%= h.changeCase.param(title) %>/index.mdx
sh: "<%= createBranch ? `git checkout -b content/${h.changeCase.param(title)}` : 'echo Skipping branch creation' %>"
---
---
title: <%= title %>
description: ""
video:
  url:
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
originalUrl: https://anglepoised.com/notes/<%= h.changeCase.param(title) %>/
source: astro
tags:
  - "tag"
---

Comments on the video.
