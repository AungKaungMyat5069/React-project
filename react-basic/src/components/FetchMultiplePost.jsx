import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchMultiplePost() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPost(res.data))
      .catch((err) => console.log("Error"));
  }, []);

  return (
    <>
      {post.map((p) => (
        <p key={p.id}>
          <span>
            {" "}
            {p.id} {p.title}{" "}
          </span>
        </p>
      ))}
    </>
  );
}
