"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]); 
  const [search, setSearch] = useState(false);
  const inputRef = useRef("");
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  const searchPosts = (e) => {
    if (e.type == "keydown" && e.key !== "Enter") {
      return;
    }
    setSearch(true);
    fetch(
      process.env.NEXT_PUBLIC_API_URL + "/posts?q=" + inputRef.current.value
    )
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .finally(() => setSearch(false));
  };

  return (
    <>
      <main className="container mx-auto px-4 py-6 ">
        <h2 className="text-4xl font-bold mb-4">Matrimony App</h2>
        <p>Here you can the latest articles.</p>
      </main>
      <div className="flex justify-end px-4">
        <input
          ref={inputRef}
          onKeyDown={searchPosts}
          disabled={search}
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button
          onClick={searchPosts}
          disabled={search}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
        >
          {search ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={"/post/" + post._id}>
            <div className="border border-gray-200 p-4">
              <img
                className="w-full h-48 object-cover mb-4"
                src={post.image}
                alt="Post Image"
              />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.short_desc}</p>
            </div>
          </Link>
        ))}

        {!posts.length > 0 && inputRef.current.value && (
          <p className="text-center text-red-600">
            No Post Found for this Query :<b>{inputRef.current.value}</b>{" "}
          </p>
        )}
      </div>
    </>
  );
}
