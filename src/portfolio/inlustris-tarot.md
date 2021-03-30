---
title: 'Modernising divination with Inlustris Tarot.'
date: '2021-03-29'
layout: 'layouts/post.html'

featuredImage: '/images/portfolio/inlustris/prototype.jpg'
socialImage: 'https://jaydnedwards.com/images/portfolio/inlustris/prototype.jpg'

tags: ['Design', '11ty', Print]
---

Tarot is something I like to practice in my free time. I find it to be a fun exercise that does predict some truths. It's also something that helps provide comfort for people, which is a big reason I like it.

## The technology used

- Photoshop
- Figma
- Unsplash
- 11ty SSG
    - HTML / CSS
    - Nunjucks templating
- Netlify

## About the project

In 2019, I was practicing tarot and thinking about how I was still struggling to learn the meanings of the Rider-Waite deck after a couple of years of on and off practicing. It didnt *click*. I had an idea of what a new Strength card could look like, so I hopped on to [Unsplash](http://unsplash.com) and Photoshop and put something together. 

<figure>
<img srcset="/images/portfolio/inlustris/strength.webp" src="/images/portfolio/inlustris/strength.jpg" alt="" />
<figcaption>The Strength card.</figcaption>
</figure>

I was really pleased and the ideas for more cards started to *blossom* in my mind.

## Creating the deck

I collected a large amount of high quality and copyright-free images from Unsplash and began to put them together in Photoshop. I researched tarot dimensions and frequently consulted the Rider-Waite deck to get the style right. I looked into the meanings of the cards I was designing and also went with my intuition if a strict Rider-Waite-like didn't match up. I ended up with a beautiful set of Major Arcana cards.

<figure>
<img srcset="/images/portfolio/inlustris/digital.webp" src="/images/portfolio/inlustris/digital.jpg" alt="" />
<figcaption>The Hermit, Justice and The Star cards.</figcaption>
</figure>

Once I had completed the Major Arcana and was happy with the designs, I looked into ordering a deck for myself. Please bear in mind that this is *just* for me and will probably be printed differently when I finish the minor arcana and look to publishing.

<figure>
<img srcset="/images/portfolio/inlustris/prototype.webp" src="/images/portfolio/inlustris/prototype.jpg" alt="" />
<figcaption>The prototype Major Arcana cards.</figcaption>
</figure>

## Building a website

After completing the Major Arcana cards, I got really excited and started to design a website in Figma. I looked at a few tarot websites, and nothing really fit what I wanted (a running theme). They were either too corporate (huge tarot readers with large companies selling lots of different things and a huge blog & newsletter etc) or heavily outdated and stylised. 

I took inspiration from a couple of sites, looking at what content they had and what content I had and what matched up. I looked at things I might need to consider, and put this together.

<figure>
<img srcset="/images/portfolio/inlustris/figma.webp" src="/images/portfolio/inlustris/figma.jpg" alt="" />
<figcaption>The Figma prototype.</figcaption>
</figure>

Once I had a design in mind, I needed to look at how I was going to build this site. I needed a few pages and a blog, so I turned to the static site generator (SSG) eleventy/11ty! It's something I've been playing with for a while now and it's what this site is built in (as of time of writing). It's fairly easy to get going once you've gotten used to it and you have **complete freedom** to build and style as you want. You build *literally* everything from scratch **and I love it**.

It's naturally fast and performant too, since the output is plain files. It also means I can build page content in Markdown, making it quicker and easier to write up a page.

It's also hosted in Netlify & Github. I upload entire directory of Inlustris to GitHub, and Netlify triggers the build in Eleventy and deploys it.

Take a look at [the Inlustris Tarot website](https://inlustristarot.com).

### What's the point of the website?

The website is designed to show off my cards, as well as allow visitors to look at my interpretations of the cards' meanings. You can go to the Major Arcana page, find the card you're looking for it and see its keywords, image and in-depth meaning. As the deck grows, the Minor Arcana will also be available.

The video below takes you through the Major Arcana page, its effects and what happens when you click through to a card.

<div class="video">
    <iframe src="https://player.vimeo.com/video/530296440?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="2526" height="1440" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Inlustris Tarot show-off"></iframe>
</div>

## Would I do anything differently?

At the moment, not at all! I'm still designing the Minor Arcana and the website will grow further still.