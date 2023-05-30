"use client"; // this essentially will be a client component
import { FormattedPost } from "@/app/types";
import React, { useState } from "react";

type Props = { post: FormattedPost };

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, seTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");

  return <div>Content</div>;
};

export default Content;
