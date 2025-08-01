# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.





### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](preview.jpg)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Accessibility features for keyboard navigation

### What I learned

This project helped me strengthen my understanding of creating interactive components with JavaScript. I particularly focused on implementing proper keyboard navigation for accessibility.

Some key code snippets:

```html
<div class="faq-item">
  <div class="faq-question">
    <h2>What is Frontend Mentor, and how will it help me?</h2>
    <img src="./assets/images/icon-plus.svg" alt="Expand" class="toggle-icon">
  </div>
  <div class="faq-answer">
    <p>Frontend Mentor offers realistic coding challenges to help developers improve their
    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
    all levels and ideal for portfolio building.</p>
  </div>
</div>
```

```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 200px;
}

.faq-item.active .toggle-icon {
  content: url('./assets/images/icon-minus.svg');
}
```

```js
// Add keyboard navigation
question.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleFaq(item);
  }
});

// Add tabindex for keyboard navigation
question.setAttribute('tabindex', '0');
```

### Continued development

In future projects, I'd like to focus more on:

- Implementing more complex animations
- Enhancing accessibility features
- Exploring different ways to structure accordion components
- Using more advanced JavaScript patterns

### Useful resources

- [MDN Web Docs on ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - This helped me understand how to make the accordion more accessible.
- [CSS-Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A great resource for understanding Flexbox layout.

## Author

- Frontend Mentor - [Ayokanmi Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
