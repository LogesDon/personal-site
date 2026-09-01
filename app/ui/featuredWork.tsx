import { lusitana } from '@/app/ui/fonts'

export default function FeaturedWork() {

    return (
        <>
            <h1 className={`${lusitana.className} text-3xl text-gray-900 md:text-5xl font-bold tracking-tight md:leading-[1.1]`}>
                Featured Work
            </h1>
            
            <p className={`${lusitana.className} text-lg text-gray-600 md:text-xl md:leading-relaxed`}>
                A curated selection of tools and projects. 
            </p>
        </>
    );
}