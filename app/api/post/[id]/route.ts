import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Params = { params: { id: string } };

// API call
export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = params; // id grabs from id object
    const { title, content } = await request.json(); // content and title sending from the frontend. This is how we grab the information from the "request"
    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log("request error", error);
    // this is recommended way to send messages
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
