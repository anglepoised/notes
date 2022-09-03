---
layout: "../../../layouts/BlogPost.astro"
title: "Chat tools: HipChat and Flowdock"
tags: ["chat", "flowdock", "hipchat", "tools"]
pubDate: 2012-08-08 09:47:00
---

_Update 2015-08-21_

Use [Slack](http://slack.com/).

_Update 2013-03-22_

Both HipChat and Flowdock have added a bunch of new features that mean the comparison below is now a bit stale (for example, Flowdock now supports side chats and HipChat now has a native OS X app) Also, [HipChat is now (optionally) free for teams of 5 users or fewer](http://blog.hipchat.com/2013/03/21/hipchat-now-free-for-teams-of-5-users-or-fewer/) and [Flowdock have been acquired By Rally Software](http://blog.flowdock.com/2013/02/13/flowdock-acquired-by-rally-software/).

Check the latest features from each before deciding. We got on very well with Flowdock during our project but in retrospect I think we would have done just as well with HipChat. They're great services and it's worth testing both to see which sits best with a team's philosophy and existing tools.

I'll revisit this next time I work on a team-based project and need to pick a chat tool.

_Original post continues_

We've been hunting for a chat tool for the project I'm currently involved in. We wanted a central space that the whole development team can use to converse that also supported automated notifications from our other tools.

Our team only has two members (do we even count as a team?) so this is massive overkill at the moment. However, we'll be introducing more members soon and past experience suggests that adoption is faster if the system is in place before the team grows too large.

We had a few basic criteria for our chat tool:

- Not [free](http://blog.pinboard.in/2011/12/don_t_be_a_free_user/).
- Not expensive.
- Persistent chat.
- Stable and non-buggy.
- Supports a useful set of integrations (Github, in particular).

We came up with a shortlist and quickly discarded some possibilities:

- Self-hosted IRC: too much effort.
- [Grove](http://www.grove.io/): too IRC-centric for our tastes.
- [Campfire](http://campfirenow.com/): too 37signals.

That left two to try: [HipChat](http://www.hipchat.com/) and [Flowdock](http://www.flowdock.com/).

Here's a quick, very unscientific analysis of both.

## [HipChat](http://www.hipchat.com/)

- Supports one-to-one chats.
- Supports guest access.
- Looks very Atlassian (so soon after [purchase](http://blog.hipchat.com/2012/03/07/weve-been-acquired-by-atlassian/), too!) This may or may not be a good thing, depending on your taste.
- Browser (mobile and desktop), desktop, iOS and Android apps (plus SMS for the slightly mad).
  - Uses Adobe Air for the desktop app. Works fine,
  - iOS app feels solid, responsive.
- Basic integration with other services seems solid.
  - GitHub repo integration was straightforward; no issues.
  - Doesn't [natively support atom/RSS](http://help.hipchat.com/knowledgebase/articles/65286-rss-integration) so no easy way to hook in wiki changes. Using [rss2webhook](https://github.com/jookyboi/rss2webhook) feels like a dependency too far.
- Pasted code is indented and rendered in a monospaced font, but no language
  detection or syntax highlighting (a personal bugbear).
- Supports @mentions.
- Pricing is \$2/mo per user: reasonable and very fair for small teams.

## [Flowdock](http://www.flowdock.com/)

- Doesn't support one-to-one chats or side-chats. Could be annoying but not a disaster and may encourage small teams to keep talking together in the appropriate room.
- Supports guest access.
- Browser, desktop and iOS apps.
  - No SMS (not a problem) or native Android app (could be a problem).
  - Recommends [Fluid](http://www.fluidapp.com/) for OS X.
  - Recommends [Chrome App](https://chrome.google.com/webstore/detail/ecfaiclpokecdjgdbnoogehobmmgalah) for Windows and Linux.
  - iOS app feels solid, responsive.
- Basic integration seems solid.
  - GitHub repo integration was easy.
  - Supports Atom/RSS: very useful for wikis (Github, in this case).
- Pasted code is indented and rendered in a monospaced font, but again no language detection or syntax highlighting. Using tab on a block of unsent text indents and triggers code formatting; a nice touch.
- Each room comes with an associated email address; received messages are displayed in the Team Inbox with formatting and attachments preserved. Useful as a cheap integration hook and a quick way to insert information from non-Flowdock users into the space.
- The two-pane layout was initially a little confusing.
- Supports @mentions.
- Tagging system looks like it could be pretty handy.
- Pricing is currently \$19/mo for 6 users (cheapest plan): more expensive than Hipchat (and we'll most likely end up paying for unused seats) but it won't break the bank.

## Conclusion

We're still at the early stages of our trial, with more testing to go. At the moment Flowdock is coming out slightly in front of Hipchat, despite the slightly less friendly pricing and lack of side-chats.

Thanks to [Ben](http://bas.me.uk/) for acting as guinea pig during testing.
