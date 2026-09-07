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
      {/* Group the header elements in a flex column */}
      <header className="flex flex-col gap-3 mb-12">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
          {post.category}
        </p>
        <h1 className="text-4xl font-bold">
          {post.title}
        </h1>
        <h2 className="text-gray-500 text-lg font-medium">
          {post.summary}
        </h2>
      </header>
      
      {/* Prose content */}
      <div className="prose text-lg">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
