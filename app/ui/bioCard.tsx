import { lusitana } from '@/app/ui/fonts'


export default function BioCard() {
  return (
    <div className="rounded-b-3xl w-full">
  {/* Increased gap from gap-6 to gap-12 to drop elements lower */}
  <div className="flex flex-col gap-12 w-full">
    
    <h1 className={`${lusitana.className} text-3xl text-gray-900 md:text-5xl font-bold tracking-tight md:leading-[1.1]`}>
      Student, Lakers Fan, Amateur Vibe-Coder.
    </h1>
    
    <p className={`${lusitana.className} text-lg text-gray-600 md:text-xl md:leading-relaxed`}>
      Hi, I&apos;m Logan. I study Mathematics and Computer Science at UNSW, with a deep interest in applied mathematics and full-stack web engineering.
    </p>
    
    <p className={`${lusitana.className} text-lg text-gray-600 md:text-xl md:leading-relaxed`}>
      To me, full-stack development is the ultimate toolkit because it lets me build and appreciate the apps everyone uses on a day-to-day basis. This portfolio is my little corner of the internet—somewhere to document the stuff I build and share it with you! 
    </p>
    
  </div>
</div>
  );
}
