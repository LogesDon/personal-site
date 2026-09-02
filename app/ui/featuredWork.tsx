import { lusitana } from '@/app/ui/fonts'
import ProjectCard from './projectCard';
import { projects } from '../lib/projects';

export default function FeaturedWork() {

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Heading Section for featured work projects */}
            <h1 className={`${lusitana.className} text-3xl text-gray-900 md:text-5xl font-bold tracking-tight md:leading-[1.1]`}>
                Featured Work
            </h1>
            
            <p className={`${lusitana.className} text-lg text-gray-600 md:text-xl md:leading-relaxed`}>
                A curated selection of tools and projects. 
            </p>
            {/* Section for project cards, uses grid for responsive Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-44 mt-8">
                {projects && projects.length > 0 && (
                    projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))
                )}
            </div>
        </div>
    );
}