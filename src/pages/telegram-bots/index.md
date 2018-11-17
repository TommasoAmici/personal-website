---
path: "/projects/telegram-bots"
title: "Telegram bots"
date: "2018-11-06"
posttype: "project"
description: "Project page for my Telegram bots"
---

## Bot to repost goals from /r/soccer

Uses Reddit's and Telegram's APIs to find the replays of each Serie A team. [Github.](https://github.com/TommasoAmici/r_soccer_goals)

I can vouch for these two libraries:

- [`praw`](https://praw.readthedocs.io/en/latest/) for Reddit
- [`python-telegram-bot`](https://python-telegram-bot.org/) for Telegram

Something I also recently learned is that you can use `youtube-dl` in Python (I only ever used it in the CLI).

## Sandro Cois: a multipurpose bot with plugins

![Sandro Cois](./sandrocois.jpeg "Sandro Cois")

[Source on Github.](https://github.com/TommasoAmici/sandro-cois-bot)

### Available plugins

- `!i` to search Google images
- `!quote`, `!addquote`, `!unquote` to handle quotes
- `/magic8ball` Magic 8 ball
- `!spongebob` to sPOngEBboBiFy a sentence
- `/weather` through Open weather API
- `!nsfw` to clear the chat
- `/9gago` to generate emojis

All the data is stored in JSON format with a port of PickleDB.
