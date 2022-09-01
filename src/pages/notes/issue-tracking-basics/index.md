---
layout: "../../../layouts/BlogPost.astro"
title: Issue tracking basics
tags: ["tools", "issue-tracking"]
pubDate: 2012-08-17 11:47:00
---

Some basic issue tracking concepts and tips, aimed mainly at project and account managers who may not have much experience in this area.

## Always use the issue tracker

Capture _all_ issues with a single, pre-agreed tool. Avoid reporting issues via email, IM, phone or in person.

Try to avoid other parties (eg. a client, test agency, or build partner) using another issue tracker. Having one issue tracker per project ultimately makes life easier for everyone. If this can't be done, only allow your team access to your internal issue tracker; if you can't find a way of automatically syncing the two systems, manually transfer tickets between that and any other systems yourself. This is not fun but will stop everyone going crazy.

Make sure everyone who's working on the project has an account on the issue tracker and make sure they know how to use it. Don't forget to include designers, account managers and - if politic - clients in your user list. If someone cannot or will not use the issue tracker, designate a proxy for any issues they raise. This would generally be the project or account manager.

An Excel document is not an issue tracker. If you're using one, stop now and introduce a proper tool. Some starting points:

_Simple, cheap_

- [Sifter](https://sifterapp.com/)
- [Lighthouse](http://lighthouseapp.com/)

_Agile-friendly_

- [Pivotal Tracker](http://www.pivotaltracker.com/)
- [Sprint.ly](https://sprint.ly/)

_Powerful, expensive_

- [JIRA](http://www.atlassian.com/software/jira/)
- [Fogbugz](http://www.fogcreek.com/fogbugz/)

## Be descriptive

Make sure the description of each issue is as clear as can be. This will help prevent issues bouncing back and forth between reporters and developers, saving everyone time.

A description should cover the following:

- Where in the project can the issue be found?
- What steps must be taken to reproduce the issue?
- Is the issue reproducible? That is, does it happen every time you attempt to recreate it?
- Does the issue appear to affect one particular browser or does it affect all browsers?
- What browser(s) are you testing with?
- What did you expect to happen or see?
- What would you expect to resolve the problem?

Too much information is generally better than too little information.

If the issue is visual in nature or difficult to locate, consider including an image. Capture the whole browser window rather than just the part of the page showing the issue; this can provide some handy additional context. If possible, circle the relevant area using an image editor. The built-in screen capture tools for [Mac OS X](http://guides.macrumors.com/Taking_Screenshots_in_Mac_OS_X) and [Windows](http://windows.about.com/od/windowsforbeginners/ht/screencap.htm) will work OK, but you may find using [Skitch for OS X](http://skitch.com/) or [something similar for Windows](http://windows.about.com/od/windowsforbeginners/ht/screencap.htm) more productive.

If the issue concerns interaction, consider including a video. If you're using OS X, [Quicktime's screen recording](http://www.macobserver.com/tmo/article/os_x_lion_screen_recording_in_quicktime_x/) will do the job well. If you're using Windows, try one of the [tools listed here](http://lifehacker.com/5839047/five-best-screencasting-or-screen-recording-tools).

If doing this is difficult for some reason (eg. you're testing on a mobile device or tablet), a quick video taken with a phone can be better than no video at all.

Before submitting the issue, review the issue description and ask yourself if the developer has enough information to:

- Reproduce the issue based on the description.
- Know what steps should be taken to resolve the issue.

## Multiple issues

Don't conflate multiple issues in one ticket. That is, if you find yourself writing "and" in the middle of a description, think about whether what comes next is part of the issue or whether it would be better as a new issue. This makes assignment and tracking of issues much easier.

Use your judgement here. If a particular page or module has multiple typos, creating an issue for each typo would be burdensome for everyone; put them in a single ticket based on context.

## Status and workflow

The priority and status fields are there for a reason. Unless you have a technical lead or developer triaging issues for you, set values for these fields and make sure everyone is working to them. However, try not to be offended if a developer changes them after reviewing the issue. The severity of an issue may not be obvious when reporting.

When changing the state of an issue (fixed, closed, reassigned etc.), add a comment outlining why this has been done.

When a bug is marked as fixed it should be assigned back to the original reporter (usually you), who should then test that the issue has been resolved and formally mark it as closed.

If the delivery date is approaching and there are still many issues to resolve, there can be pressure to close issues that may not have been addressed to everyone's satisfaction. Don't do this; it'll hurt in the long run. If the delivery date can't be pushed back, consider moving low priority issues into a post-delivery milestone and making plans to address when there's less pressure.

## Assignment

Every issue in play should have a single, designated owner. When an issue is assigned to an individual, they are responsible for making progress on that issue. If the next step is to re-assign the issue to someone else or make a request for further information, encourage people to do this as soon as possible. This helps avoid other team members becoming blocked and makes it clearer for everyone to see how much work they have left to do.
