"use client"; // this essentially will be a client component
import { FormattedPost } from "@/app/types";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { handler } from "@tailwindcss/line-clamp";
import React, { useState } from "react";

type Props = { post: FormattedPost };

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, seTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");

  const handleSubmit = () => {};

  return (
    <div className="prose w-full max-w-full mb-10">
      {/* BREADCRUMBS */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      {/* CATEGORY AND EDIT */}
      <div className="flex justify-between items-center">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          {post.category}
        </h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button onClick={() => console.log("cancel edit")}>
                <XMarkIcon className="h-6 w-6 text-accent-red" />
              </button>
            </div>
          ) : (
            <button onClick={() => console.log("make edit")}>
              <PencilSquareIcon className="h-6 w-6 text-accent-red" />
            </button>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={(e) => console.log("change title", e.target.value)}
                value={title}
              />
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
          </div>
        </>
      </form>
    </div>
  );
};

export default Content;
