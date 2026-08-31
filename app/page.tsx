import BioCard from "./ui/bioCard";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex gap-4">
      <BioCard />
      <Image 
        src="/logan-photo.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Image of Myself to go alongside bio"/>
    </div>
  );
}
