---
to: src/pages/notes/<%= h.changeCase.param(title) %>/index.md
sh: "git checkout -b quote/<%= h.changeCase.param(title) %>"
---
---
layout: "../../../layouts/posts/quote.astro"
title: <%= title %>
tags: ["tag"]
pubDate: <%= new Date().toISOString(); %>
---

`youtube: https://www.youtube.com/watch?v=jNQXAC9IVRw`

> Spacial Harajuku lens Russian advanced magnetic pachinko hologram jockey black electronic Tokyo cowboy simstim. Biological pixel origami rain-stained précis dermatrode hypnagogic origami razorgirl simstim military. ROM cryptic pyrolitic implant code techno-criminal bedslab spacial techno-criminal prosthesis deficiency television.

— <cite>[Author, _work_](https://example.com)</cite>
