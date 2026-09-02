import { Post } from "@/app/lib/data";
import Link from "next/link";
import { lusitana } from "../fonts";

export default function PostCard(post: Post) {
    return (
        <Link 
            href={`/blog/${post.slug}`}
            className="group flex flex-col p-4 border border-gray-200 rounded-2xl w-full bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
        >
            {/* Text Content Wrapper */}
            <div className="mt-4 flex flex-col gap-2 px-1">

                {/*  Category */}
                <p className="italic text-sm text-gray-500 leading-relaxed">
                    {post.category}
                </p>


                {/*  Post Title -- changes on card hover */}
                <h2 className={`${lusitana.className} text-2xl text-gray-900 md:text-4xl font-bold tracking-tight md:leading-[1.1] group-hover:text-indigo-600 transition-colors duration-200`}>
                    {post.title}
                </h2>
                
                {/*  Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                    {post.summary}
                </p>
            </div>
        </Link>
    );
}