/*
Component in React:
A React Component is like a reusable puzzle piece in your UI. Each component handles its own logic and UI, making your app modular, efficient, and easy to manage.

Two types of React Components:
  1. Functional Components (recommended, simpler)
  2. Class Components (legacy, complex)

app.jsx:
  - It's the heart (root component) of your React application.
  - Every other component you create will eventually connect here.
  - React first loads `main.jsx` which renders `<App />` into your HTML.

Example of app.jsx:
-------------------------
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <h1>Welcome to React</h1>
      <Footer />
    </>
  );
}

export default App;
-------------------------

How app.jsx works:
  - React creates a virtual DOM representation of components.
  - Changes in state or props trigger React to efficiently update and re-render only what's necessary.
  - `app.jsx` combines components to build your entire UI.

Why do we need React:
  - Manually manipulating DOM is slow, repetitive, and error-prone.
  - React handles UI updates efficiently with Virtual DOM, enhancing speed and performance.
  - Components structure your UI logically, making code readable, maintainable, and scalable.
  - React makes managing complex state easy (using Hooks).

Key Points:
  - Always break UI into reusable components.
  - Export components individually and import them into App.jsx.
  - React minimizes direct DOM manipulation, improving performance.
*/
