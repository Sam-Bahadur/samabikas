import React, { useState } from "react";
import axios from "axios";

export default function AddNotice() {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [description, setdescription] = useState("");
  const [postdate, setpostdate] = useState("");

  const submitnotice = (e) => {
    e.preventDefault();
    const noticedata = {
      title: title,
      author: author,
      description: description,
      postdate: postdate,
    };

    alert("submitted");
    settitle("");
    setauthor("");
    setdescription("");
    setpostdate("");
  };

  return (
    <div>
      <form onSubmit={submitnotice}>
        <div>
          <input
            type="text"
            placeholder="title"
            value="title"
            className="border-black  my-2 border px-2"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="author"
            value="author"
            className="border-black my-2 border px-2"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="description here"
            className="border  border-black px-2"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="date"
            className="border border-black"
            value={postdate}
            onChange={(e) => setpostdate(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          className="bg-mainblue px-2 py-1 my-4 text-center hover:bg-maingreen cursor-pointer"
          value="submit"
        />
      </form>
    </div>
  );
}
