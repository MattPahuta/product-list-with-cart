# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- CSS Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - JS library


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

Details for Project Details on Portfolio:
- Handling cart state
  - Initially, I determined to maintain a simple cart state within my App file. The project isn't a particularly robust one and this method would easiliy satisfy the needs of the limited complexity.
  - After that initial, simple implementation, I decided to use React Context, imagining expanding the menu beyond the simple dessert selections and allow for the app to scale up. 
  - A step beyond that I wouldn't necessarily use for this specific project - Redux to handle state.

Challenges with Styling the buttons, handling the different button render states:

Additional project details: Addition of localStorage, Integrate with Firebase (DB)?
- Challenge: simple dataset - need to enhnace with unique IDs for items, potentiall other enhancements.
- Design comp calls for the cart item handling on Cart component to remove item with all quantities of item from cart. I went a step beyond this to leverage the existing Cart modal to:
  - if more than one item in cart, display item with quantity and allow for increasing/decreasing quantity

Initial project solution featured conventional state and props drilled to the components needing them. This approach worked perfectly fine for the project with it's limited scope (one dessert menu with its items, a cart and a modal) and was a good process to undertake as an initial version. However, once everything was working properly and as expected, I decided to enhance the app by incorporating React Context to handle state. This simplified the distribution of props and put the project in a better place to potentially expand the menu and add additional features. 


Additional changes and enhancements from design comp and project assets
- Updates (minor) to font sizes, colors, borders, etc. to improve A11Y
- Implemented Iconify icons for some of the graphic assets to improve visual presentation over supplied .svg icons

- Added smooth transitions using the Framer Motion library 
- Included remove-scroll and focus-lock libraries to enhance confirmation modal
- Overall, I'm pleased with the look and feel of the basic interactions, modal behavior achieved with these libraries and a combination of Tailwind styles


### Useful resources

- [Complete guide to ARIA live regions for Devs](https://www.a11y-collective.com/blog/aria-live/) - A brief but solid guide to enhancing accessibility with ARIA live regions. This was really helpful in implementing and better understanding some additional accessibility features for my shopping cart.
- [Coding in Public](https://www.youtube.com/watch?v=06y49jiG9UQ) - Chris over at Coding in Public recently built this project with Astro. I haven't watched the full video yet, but his content, particularly around Astro, is top notch and I expect this to be an interesting approach to completing the project.


## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Bluesky - [@mattpahuta](https://bsky.app/profile/mattpahuta.bsky.social)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

