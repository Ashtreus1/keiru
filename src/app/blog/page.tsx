import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Keiru Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-4xl mb-8 tracking-tighter">Keiru's Blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col justify-end hover:dark:bg-gray-800 hover:bg-gray-300 p-10 transition-colors ">
                <p className="tracking-tight text-xl font-bold">{post.metadata.title}</p>
                <p className="text-base text-md font-mono">{post.metadata.summary}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt} 
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
