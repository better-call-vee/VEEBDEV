// main.jsx (Router Setup)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Posts, { loader as postsLoader } from "./Posts";
import PostDetail, { loader as postDetailLoader } from "./PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
        loader: postsLoader, // Fetch all posts
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
        loader: postDetailLoader, // Fetch single post
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Root.jsx (Global Spinner Handler)
import { Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      {/* Global loading spinner during navigation */}
      {navigation.state === "loading" && (
        <div className="spinner">
          <span>Loading...</span>
        </div>
      )}

      <main>
        <Outlet /> {/* This is where child routes render */}
      </main>
    </div>
  );
};

export default Root;



// Posts.jsx (Listing Page)
import { Link, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
};

const Posts = () => {
  const posts = useLoaderData();
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/posts/${id}`); // Programmatic navigation
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <button onClick={() => handleNavigate(post.id)}>
              View Details
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Posts;


// PostDetail.jsx (Detail Page)
import { useLoaderData, useParams } from "react-router-dom";

export const loader = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  return await res.json();
};

const PostDetail = () => {
  const post = useLoaderData();
  const { id } = useParams(); // Access route params

  return (
    <div className="post-detail">
      <h2>Post #{id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;


// useParams() extracts dynamic route segments (like :id or :slug) as strings from the current URL, merging parameters from nested routes automatically. It only includes parameters explicitly defined in the route path (e.g., /users/:userId gives { userId: "123" }), supports optional parameters with ? (e.g., :postId? → undefined if missing) and splat patterns (:path* to capture unmatched path parts). It works only in components rendered by React Router , requires manual validation (e.g., checking if (!id)), and needs explicit type conversion (e.g., parseInt(id) for numbers).