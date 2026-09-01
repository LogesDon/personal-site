import { lusitana } from '@/app/ui/fonts'


export default function BioCard() {
  return (
    <div className="rounded-b-3xl w-full">
  {/* Increased gap from gap-6 to gap-12 to drop elements lower */}
  <div className="flex flex-col gap-12 w-full">
    
    <h1 className={`${lusitana.className} text-3xl text-gray-900 md:text-5xl font-bold tracking-tight md:leading-[1.1]`}>
      Turning complex logic into clean, functional full-stack applications.
    </h1>
    
    <p className={`${lusitana.className} text-lg text-gray-600 md:text-xl md:leading-relaxed`}>
      Hi, I’m Logan. I study Mathematics and Computer Science at UNSW, with a deep interest in applied mathematics and full-stack web engineering.
    </p>
    
    <p className={`${lusitana.className} text-lg text-gray-600 md:text-xl md:leading-relaxed`}>
      To me, full-stack development is the ultimate toolkit because it lets me build complete ideas without limitations. This portfolio is my personal corner of the internet—a clean space to document the software, developer tools, and digital experiments I build simply because they're fun to create.
    </p>
    
  </div>
</div>
  );
}
