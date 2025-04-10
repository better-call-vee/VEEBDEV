import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookmark = (blog) => {
    setBookmarked([
      ...bookmarked,
      blog,
    ]); /*react re-renders after every state change*/
  };

  const handleMarkasread = (time, id) => {
    setReadingCount(readingCount + time);
    handleRemovebookmark(id);
  };

  const handleRemovebookmark = (id) => {
    const remainingBookmark = bookmarked.filter((marked) => marked.id !== id);
    setBookmarked([...remainingBookmark]);
  }; /*we just filter the bookmarks which are not read by the id we got from Blog.jsx and then set the bookmarked array to
  remainingBookmark */

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[75%]">
          <Blogs
            handleBookmark={handleBookmark}
            handleMarkasread={handleMarkasread}
          ></Blogs>{" "}
          {/*lifting*/}
        </div>
        <div className="right-container w-[25%]">
          <h1>Reading Time: {readingCount}</h1>
          <h1>Bookmarked Count: {bookmarked.length}</h1>
          {bookmarked.map((marked) => (
            <p
              key={marked.id}
              className="bg-black p-2 shadow m-2 rounded-xl text-white"
            >
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
