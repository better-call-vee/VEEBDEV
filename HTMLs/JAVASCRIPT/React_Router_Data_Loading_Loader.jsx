import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const usersProm = fetch("link").then((res) => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    Children: [
      {
        /* etc bla bla, follow React_Router_installation.jsx*/
      },
      {
        path: "users",
        loader: () => fetch("link"),
        Component: Users,
        //Now just simply in the Users.jsx component, we will write
        // const data = useLoaderData();  and we will get all the data
      },
      {
        //another one is with element
        path: "users2",
        element: (
          <Suspense fallback={<p>We are groot</p>}>
            <Users2 usersProm={usersProm}></Users2>
          </Suspense>
        ),
        // Now in the Users2 component, we will write
        // const data2 = use(usersProm);
      },
    ],
  },
]);
