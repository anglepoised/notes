---
to: src/pages/notes/<%= h.changeCase.param(title) %>/index.mdx
sh: "git checkout -b bookmark/<%= h.changeCase.param(title) %>"
---
---
layout: "../../../layouts/posts/bookmark.astro"
title: <%= title %>
bookmarkUrl: <%= bookmarkUrl %>
source: astro
tags: ["tag"]
pubDate: <%= new Date().toISOString(); %>
updatedDate: <%= new Date().toISOString(); %>
---

// import { Tweet, Vimeo, YouTube } from "astro-embed";

// <YouTube id="https://www.youtube.com/watch?v=jNQXAC9IVRw" />
// <Vimeo id="https://vimeo.com/32001208" />
// <Tweet id="https://twitter.com/astrodotbuild/status/1511750228428435457" />

> Spacial Harajuku lens Russian advanced magnetic pachinko hologram jockey black electronic Tokyo cowboy simstim. Biological pixel origami rain-stained précis dermatrode hypnagogic origami razorgirl simstim military. ROM cryptic pyrolitic implant code techno-criminal bedslab spacial techno-criminal prosthesis deficiency television.

— <cite>[Author, _work_](https://example.com)</cite>
