---
title: Goodbye orange kinesis roadmap
tags: ["meta"]
date: 2019-07-15T09:38:30.971Z
---

After 20 years of on-again, off-again blogging, it's become clear that writing essay-length posts while trying to focus on work is hard. I can blame the most recent 3-year gap on [Thomson Reuters](https://www.thomsonreuters.com/), who kept me busy doing design system-related things. More on that later, probably.

I recently stumbled over archives from both my original 2001 to 2004 era linkblog and my circa 2007 tumblelog. I had much fun creating both of those, so I'm going back to that style with a modern [IndieWeb](https://indieweb.org/) twist.

This time around I'm using [Gatsby](https://www.gatsbyjs.org/), along with [`gatsby-starter-blog`](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) to get going. Super easy to set up, but that may be because I've spent the last 5 years working on similar stacks. I only hit one small roadblock when setting up:

```sh
ERROR #85907  GRAPHQL

There was an error in your GraphQL query:

- Unknown field 'description' on type 'MarkdownRemarkFrontmatter'. file: `GraphQL request`

File: src/templates/blog-post.js
```

It took me an embarrassingly long time to work out that this error was triggered when I replaced the starter posts with my archived posts, none of which had a `description` variable in the [Front Matter](https://jekyllrb.com/docs/front-matter/). The starter [expected at least one post with this var](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/src/templates/blog-post.js#L19), so I went for the lazy fix and added a `description` variable to one of my posts. Great success.

Gatsby is overkill for a blog (compared to, say, [Eleventy](https://www.11ty.io/)) and I have [concerns](https://twitter.com/sonniesedge/status/1124443028545056768) but it's such a useful playground for React and friends that I couldn't say no.

I'm deploying to [Netlify](https://www.netlify.com/) and it is amazingly straightforward and comes with many useful features. Highly recommended.

It's been much harder wrangling posts from previous blogs into simple Markdown + Front Matter. Turns out I was [right to be concerned about Tumblr](https://notes.anglepoised.com/hello/); getting an export from that service into a useful state was (and continues to be) a massive pain.

There is still much more to do, but I can make words appear on my very own website again, and that feels good.
