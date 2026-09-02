import { ProjectCardProps } from "./data";
import taskList from '@/public/task-list-template.jpg';
import gitProject from '@/public/git-project.png'

export const projects: ProjectCardProps[] = [
    {
        imageSrc: taskList,
        slug: "task-tracker",
        title: "Task Tracker",
        tags: ["React", "Frontend"],
        description: "A simple frontend project where you can add, complete and delete tasks.",
        href: "https://simple-task-tracker-pi.vercel.app/",
    },
    {
        imageSrc: gitProject,
        title: "Git From Scratch",
        slug: "git-project",
        tags: ["Git", "JavaScript"],
        description: "A side project where I build a smaller version of Git from scratch.",
        href: "https://github.com/LogesDon/build-my-own-git"
    }
]