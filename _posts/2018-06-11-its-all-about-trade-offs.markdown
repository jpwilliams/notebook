---
layout: post
title:  "It's all about trade-offs"
date:   2018-06-11 11:23:10 +0100
categories: [dev, programming]
permalink: /its-all-about-trade-offs/
---
I recently had a great discussion regarding WebSockets and HTTP/2 with a former colleague. During the discourse, they uttered one line so deeply-set in truth that it must be shared. Repeatedly.

> "It's all about trade-offs."

As someone who has been developing web applications for a little while (and as somebody who repeatedly rewrites them), I consistently find myself doubting the quality of the system at hand. It could be more performant. It could be more readable. It could be more developer-friendly or use the better (read: newer) technology X. These niggling thoughts often cause me to cave in and needlessly redesign a _working_ system. Sometimes it's better, sometimes it's not.

{:#highlight-1}
Development as a whole is a mixed field. Its obscure mix of creativity and science is what attracts so many, yet it's that same trait that muddies the waters, encouraging [bikeshedding](https://en.wikipedia.org/wiki/Law_of_triviality) and frequently instilling doubt in our minds. But remember, [_it's all about trade-offs._](#highlight-1){:.highlighter}

For me, system design - and therefore development - is about achieving a balance between two distinct states of nirvana: __performance__ and __simplicity__. Fulfilling both of these states is very possible, but we're most often limited by one ugly constraint: __time__.

__Performance__ covers _how fast it runs_. If it's a service that delivers a response when asked a question, how quickly does it respond? How many questions can it handle at once?

__Simplicity__ can be read as how _understandable_ the system is. Does the system work in a clean and intuitive way? How easily would somebody else understand the system? Building something that's easily understood takes a lot more _time_ and consideration.

__Time__ is the major constraint. Deadlines, whether arbitrary or not, are everywhere and can't be ignored. Often, an application or feature is wanted to perform X and making the application prettier in ways the end user won't see isn't budgeted for.

> "_Any fool can write code that a computer can understand. Good programmers write code that humans can understand._" - Martin Fowler

As a whole, we already abide by these forces unknowingly: the vast majority of developers use high-level languages like JavaScript and PHP that facilitate the creation of human-readable code. A program written in a high-level language will often be less performant than one written in low-level languages like C or Assembly, but readability, ease of use and ease of _change_ counts for _a lot_, so we sacrifice these performance gains. Ergo, we trade _performance_ for _time_ and _simplicity_.

Very few projects, applications or architectures provide the freedom to reach the peak of performance and simplicity simultaneously, so we face trade-offs. We use X technology because its more well-known, so easier to find help with, though it may be less performant. We use a nasty-looking regex to perform a particular search because it's blisteringly quick, though it's insanely difficult to adapt to changing requirements. We use microservices because they're great for defining service boundaries and ownership, though they're hell to deploy.

{:#highlight-2}
Dynamically-typed versus statically-typed, relational versus non-relational, object-oriented versus procedural, monoliths versus microservices - there are no right answers. If you can reasonably justify the balance of performance, complexity and time in your application then your choices are correct. [In most cases, a solution is not invalid because it fails to maximise a single aspect of its potential; it is the sum of its aspects.](#highlight-2){:.highlighter}
