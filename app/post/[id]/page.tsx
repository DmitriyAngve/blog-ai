import { prisma } from "@/app/api/client";
import React from "react";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "@/app/types";
import Sidebar from "@/app/(shared)/Sidebar";
import Content from "@/app/post/[id]/Content";

type Props = {
  params: { id: string };
};

export const revalidate = 60;

// grabs the relevant Post from Prisma in the right location
const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  // check if post doesn't exist
  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  // from get post we can't pass a date object which is something I getting from the backend and I cannot pass if into the component ("Post")
  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;
