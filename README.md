# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

## My process

### Built with

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

### What I learned

- I learned a lot about using TypeScript with React in this project, I'm now pretty comfortable with it.
- The useMemo and useCallback React hooks. They're very similar, the difference is that useMemo caches a value and useCallback caches a function. This prevents them from being recreated on every render.
- Rendering components based on screen size using the react-media package.

### Useful resources

- [Controlling background-images | CSS Tutorial](https://www.youtube.com/watch?v=3T_Jy1CqH9k) - This video teaches you all you need to know about background images and it helped me to position them properly.
- [Gradient Borders in CSS](https://css-tricks.com/gradient-borders-in-css/) - This article helped me understand how to create borders with a linear gradient. I recommend it to anyone who wants to implement gradient borders in their projects.

## Author

- Frontend Mentor - [@Chamara-Wijepala](https://www.frontendmentor.io/profile/Chamara-Wijepala)

## Acknowledgments

- [react-media](https://www.npmjs.com/package/react-media)
- [uuid](https://www.npmjs.com/package/uuid)
