"use client"; // this essentially will be a client component
import SocialLinks from "@/app/(shared)/SocialLinks";
import { FormattedPost } from "@/app/types";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import React, { useState } from "react";

type Props = { post: FormattedPost };

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, seTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

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
            <h6 className="text-wh-300 text-xs">{post.createdAt}</h6>
          </div>
        </>

        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480px) 100vw,
                 (max-width: 768px) 85vw,
                 (max-width: 1060px) 75vw,
                 60vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className={
            isEditable
              ? "border-2 rounded-md bg-wh-50 p-3"
              : "w-full max-w-full"
          }
        >
          {isEditable && <></>}
          <EditorContent editor={editor} />
        </div>

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>

      {/* SOCIAL LINKS */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
