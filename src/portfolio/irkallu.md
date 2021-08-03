---
title: "Building a community with Irkallu's headless CMS."
date: '2021-04-03'
layout: 'layouts/post.html'

featuredImage: '/images/portfolio/irkallu/home.png'
socialImage: 'https://jaydnedwards.com/images/portfolio/irkallu/home.png'

tags: ['Design', '11ty']
category: 'web'
---

Irkallu is a gaming guild centred around the game [Ashes of Creation](https://ashesofcreation.com), and aims to be a safe, supportive community for casual players who don't dedicate their life to one game. 

They wanted to build a presence and have a place where people could see their core goals & aims, their hierarchy, a blog to record their thoughts and history together, and enable others to join from their site.

I designed the logo, website and digital assets. I then built the Irkallu website front-end using the [static site generator, 11ty](https://www.11ty.dev/) and coupled that with a headless WordPress build to enable blog functionality.

[Visit the Irkallu website](https://irkallu.com).

## The technologies used
- Photoshop
- Illustrator
- Figma
- 11ty
- Headless WordPress (enabled by plugins)
- WordPress API

## Design Assets
I started with the logo by first looking at the name and the theme. Irkallu is a Mesopotamian word for the Underworld, and their hierarchy is themed after it. I took that and put together, in Illustrator, a two-toned crystal with the cuneiform character *Dingir*, pronounced *An*. It translates to heaven/sky but is also used in names to denote a god. I thought it to be quite fitting.

<figure>
<img src="/images/portfolio/irkallu/dingir.svg" alt="" />
<figcaption>The Irkallu logo.</figcaption>
</figure>

With that put together, I moved on to some digital assets for use on the offical [Ashes of Creation forums](https://forums.ashesofcreation.com/) and Discord server (such as a forum signature and a guild banner).

<figure>
{% image "./src/images/portfolio/irkallu/signature.png", "", "100%" %}
<figcaption>The Guildmaster forum signature.</figcaption>
</figure>

<br>

<figure>
{% image "./src/images/portfolio/irkallu/banner.jpg", "", "100%" %}
<figcaption>The guild banner.</figcaption>
</figure>

## Web Design

 I looked at quite a few different websites for guilds in the Ashes of Creation space and decided that I did not like a lot of them. Guild websites tend to have a certain feel to them that rubs me the wrong way. Still, they had plenty of inspiration available for things such as the conent needed, and things I could include.

 Then, I designed the website for Irkallu in [Figma](https://www.figma.com/files/recent?fuid=688451501189513908), my software of choice. However, the final development ended up looking slighlty different to changes I needed to make along the way. I sometimes find it easier to visualise how something is going to look when it's actually in the browser. For example, the background you can see in the screenshot below is very large and stretched. However, the plan was that the background would merely fill the screen and stay in place, wthout needing to fit the content. I couldn't do this in Figma, but could with CSS.

<figure>
{% image "./src/images/portfolio/irkallu/figma.png", "", "100%" %}
<figcaption>The design in Figma.</figcaption>
</figure>

Another change that I made while developing was the addition of backgrounds on headings. It also gives the site a bit more personality and colour.

<figure>
{% image "./src/images/portfolio/irkallu/focus.png", "", "100%" %}
<figcaption>The 'Our Focus' area of the site.</figcaption>
</figure>

## The Site Development

I built Irkallu using the static site generator 11ty. This let me build up the front-end nicely as well as hook it up to a headless back-end (more on that later). I could build each page of the website using markdown files to write the content and connect them to templates written in HTML and Nunjucks. I find this to be a *really* powerful tool that used to scare me a little but now really enables me.

With this build, I tried out Glassmorphism, and used a [glassmorphism CSS generator](https://glassmorphism.com/) to see what it'd look like and to quickly get the code. I made this a utility class of `.glass` so I could add it to multiple elements without repeating myself.

To avpid repeating myself with colours, I also use a bunch of CSS Custom Properties to create colour variables. I just *love* modern CSS.

The front-end is hosted on [Netlify](https://www.netlify.com/), which is another great tool that I love. The files are pushed to GitHub, which is connected to Netlify. Netlify then triggers a build and redeploys the site with the latest changes. I can't overstate how great this is for me.

Then, the tricky part comes with the back-end. Irkallu needed a blog, so I looked at some options for a headless CMS, including:

- [Forestry](https://forestry.io/)
- [Sanity](https://sanity.io/)
- [Strapi](https://strapi.io/)
- [WordPress](https://wordpress.org/)

In the end, I went with WordPress that's made headless through the use of plugins and its API. I had a lot of help here, so I want to thank [Alistair Shepherd](https://alistairshepherd.uk/) for letting me go through the files of one of his headless CMS projects. I also need to thank my partner, who handled setting up a docker instance and the WordPress hosting (as well as some DNS help).

The way that this setup works is that a plugin installed on WordPress redirects traffic from the WP front-end to the Irkallu front-end. I use Advanced Custom Fields for some extra info and I use a plugin that exposes that to the API. I call the API on the Irkallu front-end and a plugin on the WordPress back-end enables a Netlify webhook to trigger a deploy whenever changes to content is made. Using Nunjucks and Markdown templates in 11ty, with 11tty's pagination and aliasing, I can create a blog using information from the API *without actually creating those pages*. It's generated on deploy!

<figure>
{% image "./src/images/portfolio/irkallu/blog-feed.png", "", "100%" %}
<figcaption>The blog feed generated by the WP API.</figcaption>
</figure>

This is another thing that I find to be really powerful. I have developed WordPress themes in the past but it hasn't been easy or enjoyable - I've also not liked not having 100% control over everything. With this set-up, however, I have complete control over everything and I can completely skip out WordPress' bloat. This makes the site more performant, leading to a better user experience, and it also means I can have a better developer experience.

Take a look at this Lighthouse score for the blog feed.

<figure>
{% image "./src/images/portfolio/irkallu/lighthouse.png", "", "100%" %}
<figcaption>Lighthouse score of 100 on Performance, Accessibility and Best Practices, and a score of 91 on SEO.</figcaption>
</figure>

[Visit the Irkallu website](https://irkallu.com).