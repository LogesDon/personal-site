import BioCard from "./ui/bioCard";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex gap-4">
      <BioCard />
      <Image 
        src="/logan-photo.jpg"
        width={440}
        height={440}
        className="hidden md:block rounded-b-3xl pt-80"
        alt="Image of Myself to go alongside bio"/>
    </div>
  );
}
