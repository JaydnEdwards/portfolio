---
title: 'How I made text gradients'
date: '2019-10-15'
layout: 'layouts/post.html'

featuredImage: '/images/posts/gradient-text/thumbnail.jpg'
socialImage: 'https://jaydnedwards.com/images/posts/gradient-text/thumbnail.jpg'
excerpt: 'I explain how I make text with gradient fill in HTML and CSS, with an example from CodePen.'

tags: ["Tutorial"]
---

A big part of my website’s design is the use of gradients. They’re on my links, on my titles, in my footer and in my favicon. I wanted to share how to do your own text gradients.

First of all, you need to pick a gradient that you like the look of. I’d recommend not using colours that are similar, as the gradient might not be that visible. You can use [CSSGradient.io](http://cssgradient.io/) as a fantastic free tool to create the perfect gradient. It’s what I used in this tutorial.

Once you have the perfect gradient, you need to make some text. You’ll see that I made a class called <span class="highlight">‘gradient’</span>, because I wanted to be able to easily apply the CSS to elements.

You’ll want to add a colour on the text and a normal coloured background. These will be your fallbacks if something goes wrong. Then, add the gradient as a background.

It won’t look great there, as you can see below.

<figure>
<img srcset="" src="/images/posts/gradient-text/example-1.png" alt="An example of how applying a gradient background to text also filles the background behind it." />
<figcaption>Eek! That does NOT look good. <span class="[ emoji ]" aria-hidden="true">🤢</span></figcaption>
</figure>

So, to clip the background to the text and the text only, we need to add two -webkit lines of code: `-webkit-text-fill-color: transparent;` and `-webkit-background-clip: text;`. These remove the fill from the text and clip the background to the text respectively.

Check out my CodePen below to see how it all works together:

<p class="codepen" data-height="550" data-theme-id="dark" data-default-tab="css,result" data-user="jaydn_edwards" data-slug-hash="QWWNzzr" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Gradient Text">
  <span>See the Pen <a href="https://codepen.io/jaydn_edwards/pen/QWWNzzr">
  Gradient Text</a> by Jaydn Edwards (<a href="https://codepen.io/jaydn_edwards">@jaydn_edwards</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async="" src="https://static.codepen.io/assets/embed/ei.js"></script>

Thanks for reading! If you found this helpful, I’d love a share and a mention on social media! If you use it yourself, I’d love to see it. Follow me on Twitter [@jaydn_edwards](https://twitter.com/Jaydn_Edwards).