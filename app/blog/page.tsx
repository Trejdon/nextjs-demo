import { getAllPosts } from "../../lib/cms";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Link href={`/blog/${post.slug}`} key={index}>
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
