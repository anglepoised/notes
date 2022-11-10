---
layout: "../../../layouts/posts/post.astro"
title: Adding a post scaffold generator to an Astro blog
tags: ["astro", "markdown", "meta"]
pubDate: 2022-09-16T14:16:21.673Z
---

Way back when this blog was built with Hexo, I used the convenient [Scaffolds feature](https://hexo.io/docs/writing#Scaffolds) as a way of bringing some consistency to blog posts.

I'm using [Astro](https://astro.build/) now, but can't find a similar feature. I guess this pattern has either fallen out of favour or doesn't work so well with tools that aim to do more than build [Jekyll](https://jekyllrb.com/)-style blogs. So, I thought I'd throw something together.

In the old days I would have reached for [Yeoman](https://yeoman.io/) for generator-type tasks, but it feels like a massive hammer for a relatively tiny nut so I went looking for an alternative. I checked out both [hygen](http://www.hygen.io/) and [plopjs](https://plopjs.com/) but ultimately couldn't bring myself to use a tool called plop. So, hygen it is.

The first cut of the generator is very straightforward. Running `yarn post` prompts for a post title, then uses that to creates a new post-specific git branch and markdown template (with some sample [loremgibson](http://loremgibson.com/)) in the appropriate location.

I hope to broaden this out to other [Indieweb post types](https://indieweb.org/posts#Types_of_Posts) once I've decided on the best way to structure everything.
