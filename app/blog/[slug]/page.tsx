// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { posts } from "@/app/lib/posts";
import ReactMarkdown from "react-markdown";

// 1. Declare the component as async, and wrap params in a Promise type
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // 2. Await the dynamic parameters
  const resolvedParams = await params;
  
  // 3. Find the matching static post data
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-8 pt-20">
      <p className="text-blue-600 text-sm font-semibold uppercase">{post.category}</p>
      <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
      <h2 className="text-gray-500 mb-8">{post.date}</h2>
      <div className="prose text-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
