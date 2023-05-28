import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import Sidebar from "app/(shared)/Sidebar";
import { prisma } from "./api/client";

// If I'll do getPosts => fetch call to the backend and fetch the data from the server that call the backend database, in which case we will directly call the database
const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

// let's make this component "async" for creating server components
export default async function Home() {
  // This is essentially a server component
  const posts = await getPosts();
  // This is essentially a server component
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
  // leading-7 = line-height: 1.75rem = 28px
}
