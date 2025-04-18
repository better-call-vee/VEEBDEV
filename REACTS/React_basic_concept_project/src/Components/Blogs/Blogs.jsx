import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleMarkasread }) => {
  const [blogs, setBlogs] = useState([]); // useState is simply replacement of variable

  //useEffect automatically executes the code if the webpage is reloaded
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []); //also , we have dependency here to work on it.

  return (
    <div>
      <h1 className="text-3xl">total : {blogs.length}</h1>
      <div className="all-blogs grid grid-cols-2 gap-y-5 pl-6">
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog.id}
            handleBookmark={handleBookmark}
            handleMarkasread={handleMarkasread}
          ></Blog> // props usage
        ))}
      </div>
    </div>
  );
};

export default Blogs;
