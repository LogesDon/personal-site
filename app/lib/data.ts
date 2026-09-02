import { StaticImageData } from "next/image";

// 1. Define type-safe interface for navigation links
export interface NavItem {
  label: string;
  href: string;
}

// 2. Define type-safe interface for project cards in featured work section of 
//    home page
export interface ProjectCardProps {
  imageSrc: StaticImageData, 
  title: string, 
  tags: string[], 
  description: string, 
  href: string  //link to destination path
}

export type Post = {
  slug: string; 
  title: string; 
  summary: string; 
  content: string; 
  category: string;
  date: string;
}