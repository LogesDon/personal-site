import Image from 'next/image';
import { lusitana } from './fonts';
import { ProjectCardProps } from '../lib/data';
import Link from 'next/link';

export default function ProjectCard({
    imageSrc, 
    title, 
    tags, 
    description,
    href
}: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col p-4 border border-gray-200 rounded-2xl w-full bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
        >   
            
            {/* 1. Fixed Aspect Ratio Container */}
            <div className="relative w-full aspect-[2/1] shrink-0 rounded-xl overflow-hidden">
                <Image 
                    src={imageSrc}
                    alt={`Project banner for ${title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    // Addes smooth scale-up animation on card hover
                    className="object-cover group-hover:scale-102 transition-transform duration-300 ease-in-out rounded-2xl"
                    priority
                />
            </div>

            {/* 2.Tags and  Text Content Wrapper */}
            <div className="mt-4 flex flex-col gap-2 px-1">

                {/* Render Purple Tag Pills */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-1">
                        {tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-2 py-0.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/*  Project Title -- changes on card hover */}
                <h2 className={`${lusitana.className} text-2xl text-gray-900 md:text-4xl font-bold tracking-tight md:leading-[1.1] group-hover:text-indigo-600 transition-colors duration-200`}>
                    {title}
                </h2>
                
                {/*  Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>

        </Link>
    );
}
