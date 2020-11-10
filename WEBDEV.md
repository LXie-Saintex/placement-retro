# What is this page

 This page documents my journey from injecting a JS script directly into html to whatever ends that will increase page performance drastically. It is my attempt to understand the evolution of web development. 

## Why do i create this page

As much as I try to learn web development in a reactive and sustainable way, I found myself lost in the sea of tools, patterns and concepts. I want to see what i've read and come to my own conclusions. 

### Beginning

I begin with importing the `.js` file directly into `index.html`, where an inline `script` was also created to attach event listener. Both scripts are located right before the closing `</body>` tag to avoid hindering the previous DOM elements load. 