import React from "react";
import { IoIosBookmarks } from "react-icons/io";

const Blog = ({ blog, handleBookmark, handleMarkasread }) => {
  // can be written is = ({blog})... like this
  // const { blog } = props; // destructuring if we don't use {blog} and write props only
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={blog.cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="author flex justify-around items-center">
          <h3>{blog.author}</h3>
          <img className="w-16" src={blog.author_img} />
          <button
            onClick={() => handleBookmark(blog)}
            className="cursor-pointer hover:translate-y-[-4px] transition-transform duration-200"
          >
            <IoIosBookmarks size={25} />
          </button>
          {/*we can use props in these icons*/}
        </div>
        <h2 className="card-title">{blog.title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>

        <div className="flex">
          {blog.hashtags.map((has) => (
            <p key={has}>{has}</p> /* hashtags were in an array */
          ))}
        </div>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleMarkasread(blog.reading_time, blog.id)}
            className="btn btn-primary"
          >
            Mark As Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
