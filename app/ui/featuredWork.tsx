import { lusitana } from '@/app/ui/fonts'
import ProjectCard from './projectCard';
import taskList from '@/public/task-list-template.jpg'
import gitProject from '@/public/git-project.png'

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
                <ProjectCard 
                    imageSrc={taskList}
                    title="Task Tracker"
                    tags={["React", "Frontend"]}
                    description="A simple frontend project where you can add, complete and delete tasks."
                    href="https://simple-task-tracker-pi.vercel.app/"/>
                <ProjectCard 
                    imageSrc={gitProject}
                    title="Git From Scratch"
                    tags={["Git", "JavaScript"]}
                    description="A side project where I build a smaller version of Git from scratch."
                    href="https://github.com/LogesDon/build-my-own-git"/>
            </div>
        </div>
    );
}