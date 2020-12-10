---
posttype: "project"
path: "/projects/summit-chasing/summit-chasing/"
gitlink: "https://github.com/danielballoch/summit-chasing"
image: "./summit-thumb2.png"
date: "2020-04-27"
title: "SummitChasing"
service: "Full Stack Ecommerce"
published: true
tags: ['Brand Identity', 'Ecommerce',]

intro1: "SummitChasing is a print and clothing store which aims to inspire doers and share positive messages in a fashionable manner. 
There's a range of continued designs along with the Summit Raffle Drop: A limited stock product released each month which, upon purchase, puts you in the raffle to be 1/5 lucky winners of that months summit chasing goodie bag."
intro2: "Create a fully custom drop-ship eccomerce site with CMS, secure payments and automated fulfillment"
intro3: "
I brainstormed, looked at the already existing tools and methods for dropship & ecommerce, tested apis, looked at database design, selected tools and thought about what best fit the project and would also have good transfer to future projects in terms of my own learning." 

intro4: "
While still in progress (a flow cart and progress list can be found at the bottom of the page), I've already learnt a lot more about Stripe, Next.js, react, node, apis, databases, psql, CMS, sanity, query languages (GROQ) and the bigger picture of business. While challenging at times, it's been a lot of fun!
"


heading1: "Project Architechture"

paragraph1_1: "
I ended up on Next.js as the framework, stripe api for payments, printify api for product fulfullment, psql for my database and sanity as my headless CMS.
User data is stored on the psql database, along with basic product data for the cart system. Product details, images, copy etc is stored on sanity and basic copies
are also uploaded to the printify store, where the real products are created.
"

paragraph1_2: "
How the front end fits in with this:"

heading2: "Front End App Development"

paragraph2_1: "
I'm fairly familar with fontend development at this point, using bootstrap to get the project up quick before starting on the more technical stuff meant I 
had something decent looking and could come back to it later. I didn't plan the design of this one too much, just a quick few prototypes in Adobe XD since I already had an idea of what I wanted and I was more excited to get stuck into the back end stuff."

paragraph3_1: "
The front end section was a bit of a challenge, but I came across some innovations on the part of Vercel that made things really interesting and exciting for the future of web development.  
"

paragraph3_2: "
Most of the site is static and prerendered, however the cart component is one page where data needs to be refreshed since the user is able to adjust product quantity. Thankfully there's SWR: a react hooks library for remote data fetching, which makes this easier. I used SWR throughout my project, but the mutate function specifically came in handy in this case, although I'm still unsure how to make it look clean with compartmentation.
"

paragraph3_3: "
The database design was new to me as I've only set up simple databases, I tried to learn the basics of relational databases: tables, fields, primary keys, foreign keys, data types, normal forms etc and see if there were already establised ecommerce designs or methods which I could adjust for my own use. I ended up with the database to the right, although this is subject to change as the app is developed.
"
heading4: "Sanity & Printful"

paragraph4_1: "
The last CMS I set up was netlify because It's where I host a couple of my websites and was easy to integrate, but for this project I really wanted to 
research a bit more a find the best option. Sanity looked to be one of the best options to me as it was customisable and had a good free plan.
"

paragraph4_2: "
Setting this up was simple I just downloading one of their templates and edited the schemas to fit for my products, then went through their documentation and learnt how to query data using GROQ. I'm fairly comfortable with GraphQL due to my experience playing around with Gatsby, and this wasn't too different, so it was fairly straight forward once I knew the syntax.
"

paragraph5_1: "
That concludes the main points of the project, if you have any questions, advice, critique or would like me to work on a project I'd love to hear from you!
"


---




