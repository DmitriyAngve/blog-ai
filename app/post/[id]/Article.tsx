import { Editor, EditorContent } from "@tiptap/react";
import React from "react";
import EditorMenuBar from "./EditorMenuBar";

type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
};

const Article = ({
  contentError,
  editor,
  isEditable,
  setContent,
  title,
}: Props) => {
  if (!editor) {
    return null;
    0;
  }
  return (
    <div
      className={
        isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
      }
    >
      {isEditable && (
        <>
          <EditorMenuBar editor={editor} />
          <hr className="border-1 mt-2 mb-5" />
        </>
      )}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Article;
