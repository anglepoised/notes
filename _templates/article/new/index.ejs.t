---
to: src/content/articles/<%= h.changeCase.param(title) %>/index.md
sh: "<%= createBranch ? `git checkout -b content/${h.changeCase.param(title)}` : 'echo Skipping branch creation' %>"
---
---
title: <%= title %>
description:
isDraft: true
source: astro
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
originalUrl: https://anglepoised.com/notes/<%= h.changeCase.param(title) %>/
source: astro
tags:
  - "tag"
---

> Spacial Harajuku lens Russian advanced magnetic pachinko hologram jockey black electronic Tokyo cowboy simstim. Biological pixel origami rain-stained précis dermatrode hypnagogic origami razorgirl simstim military. ROM cryptic pyrolitic implant code techno-criminal bedslab spacial techno-criminal prosthesis deficiency television.

— <cite>[Author, _work_](https://example.com)</cite>
