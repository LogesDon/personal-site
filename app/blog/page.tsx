import { posts } from "../lib/posts";
import PostCard from "../ui/blog/postCard";

export default function Blog() {
    return (
        <div className="w-full px-6 pt-24 md:px-16 max-w-5xl mx-auto mb-20">
            {/* Header section matching Figma */}
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Blog</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Thoughts on stuff.
                </p>
            </div>

            {/* Clean, un-boxed Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {posts && posts.length > 0 && (
                    posts.map((post) => (
                        <PostCard key={post.slug} {...post} />
                    ))
                )}
            </div>
        </div>
    );
}
