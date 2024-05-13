---
to: src/content/notes/<%= h.changeCase.param(title) %>/index.mdx
sh: "<%= createBranch ? `git checkout -b content/${h.changeCase.param(title)}` : 'echo Skipping branch creation' %>"
---
---
title: <%= title %>
description:
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
originalUrl: https://anglepoised.com/notes/<%= h.changeCase.param(title) %>/
source: astro
tags:
  - "tag"
---

// import { Tweet, Vimeo, YouTube } from "astro-embed";

// <YouTube id="https://www.youtube.com/watch?v=jNQXAC9IVRw" />
// <Vimeo id="https://vimeo.com/32001208" />
// <Tweet id="https://twitter.com/astrodotbuild/status/1511750228428435457" />

> Spacial Harajuku lens Russian advanced magnetic pachinko hologram jockey black electronic Tokyo cowboy simstim. Biological pixel origami rain-stained précis dermatrode hypnagogic origami razorgirl simstim military. ROM cryptic pyrolitic implant code techno-criminal bedslab spacial techno-criminal prosthesis deficiency television.

— <cite>[Author, _work_](https://example.com)</cite>
