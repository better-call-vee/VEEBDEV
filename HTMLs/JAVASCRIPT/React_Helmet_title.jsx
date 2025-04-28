// App.jsx
// Example: React Router v6.4 createBrowserRouter + React Helmet Async

import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useMatches,
    useLoaderData,
    useParams,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";

/**
 * Define routes with optional `handle.title` for static titles
 */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,      // Custom layout injecting <title>
        errorElement: <ErrorPage />,  // Renders on loader/action errors
        children: [                   // Routes rendered inside <Outlet />
            {
                index: true,               // \"index\" renders at path "/"
                element: <Home />,
                loader: () => fetch("booksData.json"),
                handle: { title: "Home - MyBookApp" }, // Static title for Home
            },
            {
                path: "about",
                element: <About />,
                handle: { title: "About Us - MyBookApp" },
            },
            {
                path: "readList",
                loader: () => fetch("booksData.json"),
                element: <ReadList />,
                handle: { title: "My Read List - MyBookApp" },
            },
            {
                path: "bookDetails/:id",
                loader: () => fetch("booksData.json"),
                // Wrap BookDetails in our own component to set a dynamic <title>
                element: <BookDetailsWithHelmet />,
            },
        ],
    },
]);

/**
 * RootLayout:
 * - Reads the deepest `handle.title` from matched routes
 * - Sets document.title via <Helmet>
 * - Renders child routes with <Outlet>
 */
function RootLayout() {
    const matches = useMatches();
    // Find all matched routes with handle.title, pick the last one
    const title =
        matches
            .filter((m) => m.handle && m.handle.title)
            .map((m) => m.handle.title)
            .pop() || "MyBookApp"; // Fallback title

    return (
        <>
            {/* React Helmet injecting into <head> */}
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Outlet />
        </>
    );
}

/**
 * BookDetailsWithHelmet:
 * - Uses loader data + URL param to find the current book
 * - Sets a dynamic <title> based on book.title
 * - Delegates rendering to the actual BookDetails component
 */
function BookDetailsWithHelmet() {
    // loader returned array of books
    const books = useLoaderData();
    // get the :id param from URL
    const { id } = useParams();

    // find the matching book object by id
    const book = books.find((b) => b.id.toString() === id);

    // construct a title based on book data (if found)
    const dynamicTitle =
        book && book.title ? `Book Details - ${book.title}` : "Book Details";

    return (
        <>
            {/* Dynamic <title> per book */}
            <Helmet>
                <title>{dynamicTitle}</title>
            </Helmet>
            {/* Pass book data down to your page component */}
            <BookDetails book={book} />
        </>
    );
}

/**
 * Bootstrap the app:
 * - Wrap <RouterProvider> in <HelmetProvider> for Helmet Async
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HelmetProvider>
        <RouterProvider router={router} />
    </HelmetProvider>
);

/* ========================================================================
  📝 NOTES FOR THE NOOB:

  1. Install dependencies:
     npm install react-helmet-async react-router-dom

  2. Wrap your app in <HelmetProvider> (top of tree) to support async Helmet.

  3. For static page titles, add `handle: { title: 'Your Title' }` on routes.

  4. In RootLayout, `useMatches()` gives all matched routes. We pick
     the deepest static title to set document.title.

  5. For dynamic titles (like BookDetails), wrap your component in a
     custom component that reads loader data via `useLoaderData()` and
     URL params via `useParams()`, then injects <Helmet><title>…</title></Helmet>.

  6. Always provide a fallback title in case no route sets one.

  7. Now navigate between routes and watch your browser tab update!
============================================================================ */
