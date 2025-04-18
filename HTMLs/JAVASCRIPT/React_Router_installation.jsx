// https://reactrouter.com/start/data/installation

//follow this git repo: https://github.com/ProgrammingHero1/intro-to-react-router/tree/main/src/components
// go to the link and copy the npm -i line and install.

// then go to main.jsx

import { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// paste this

const router = createBrowserRouter([
  {
    path: "/", //main page, which was used to be App.jsx
    element: <div>Hello World</div>,
  },
  {
    path: "about",
    element: (
      <div>Give me tough love...push me and force me till I pass out</div>
    ), // this can be achieved from localhost:5173/about
  },
  //now , what about Components?? easy
  {
    path: "app",
    Component: App, // then we have to write just the component name
  },
  //but:
  {
    path: "app2",
    element: <App></App>, //here we have to write like an element, so write App as tag
  },
  //
  //
  //another way to do this, but with children:
  {
    path: "/",
    Component: Root, // main jsx file(suppose, homepage after loading a website)
    Children: [
      { index: true, Component: Home }, // this will be the parent component. this will change by time with path
      { path: "mobiles", Component: Mobiles },
      { path: "tanvee", Component: Faiyaz }, // localhost:5173/tanvee will replace what's on the home and put what's in
      //tanvee
    ],
  },
]);

// also this, this is the router definition, it's like an array;

// Now clear <App></App> from the body.

// finally this:
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>{" "}
    {/* 'router is gotten from line 11, now the page will show Hello World or what is written in the element:*/}
  </StrictMode>
);
