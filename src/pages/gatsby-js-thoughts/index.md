---
path: "/misc/gatsby-js"
title: "GatsbyJS"
date: "2018-11-12"
posttype: "blog"
description: "My thoughts on GatsbyJS after about a week of use"
---

<div class="center-flex">

<svg x="0px" y="0px"
	 fill="#744c9e" width="120px" height="120px" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" >
<g>
<g>
<path d="M600,28.644C284.449,28.644,28.644,284.448,28.644,600c0,315.553,255.806,571.356,571.356,571.356
			c315.553,0,571.356-255.804,571.356-571.356C1171.356,284.448,915.553,28.644,600,28.644z M151.414,605.956l442.629,442.63
			C350.989,1045.418,154.581,849.01,151.414,605.956z M700.417,1037.37L162.63,499.583C208.232,300.142,386.734,151.339,600,151.339
			c149.077,0,281.147,72.727,362.734,184.616l-62.12,54.812C834.433,295.859,724.478,233.746,600,233.746
			c-158.485,0-293.447,100.668-344.46,241.545l469.17,469.17c113.938-41.26,201.566-137.44,230.914-256.56H761.152v-87.9h205.102
			v-0.002h82.407V600C1048.661,813.266,899.859,991.768,700.417,1037.37z"/>
</g>
</g>
</svg>

</div>

As I've mentioned on the [project's page](/projects/portfolio), this website is built with [GatsbyJS](https://www.gatsbyjs.org/), and here I'd like to point out some things I liked.

This is not meant to be a guide: Gatsby's [docs](https://www.gatsbyjs.org/docs/) are pretty good, just read those.

### OOTB server side rendering

This is glorious for SEO, and speed, and all other reasons, but in particular I appreciate it from a user POV, as I remember all the times I've wanted to scrape a webpage, only to be met by an empty `index.html` that does nothing without Javascript.

It takes no configuration and it's hard to break: I only ran into compiler errors when using `window` or `document` outisde of the appropriate scope.

### Data sources

Aside from APIs and databases, Gatsby allows you to store all your posts in Markdown files: a script will recursively read the directory it's pointed to and generate pages and URLs.

The content of each `.md` file is funneled into a React component. It's possible to set up different templates for different post types too: [see here](https://desktopofsamuel.com/building-gatsby-with-multiple-post-type/).

This is great as it makes a more feature rich CMS unnecessary if your use case is simple (and mine is!).

### Routes and URLs

In my past experiences with React I've always ended up using `react-router` for declarative routing. Not that it's bad, but I was glad Gatsby makes it unnecessary: do you want a new page with a new URL? Easy peasy: `newpage.js` will be at /newpage.

To link to the new page there's an aptly called `Link` component:

`<Link to="/newpage">New Page</Link>`
