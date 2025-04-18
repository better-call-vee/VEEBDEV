import { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// paste this

// Suppose, we have a user data. there, we have unique ids for users.
// by clicking on the user, we will get to the page where only that specific user's data will be loaded.

const router = createBrowserRouter([
  {
    path: "users/:userID", // this is dynamic routing. using ":". it will change the URL according to the ID
    Component: UserDetails,
    //
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

/*
in the user component:
(without button)

we will get the id by destructuring

<Link to = {`/users/${id}`}> Show Details </Link>

to load the data, in line 13,
loader: ({params}) => fetch(`link/${params.userID}`),
this will take the data to UserDetails

there, we can use 'useLoaderData()' in UserDetails, and destructure then show those

*/
