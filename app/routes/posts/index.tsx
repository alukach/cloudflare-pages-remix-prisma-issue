import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};
export const loader = async (): Promise<LoaderData> => {
  return {
    posts: await getPosts(),
  };
};

export default function Posts() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
