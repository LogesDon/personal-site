import BioCard from "./ui/bioCard";
import Image from 'next/image'
import FeaturedWork from "./ui/featuredWork";

export default function Home() {
  return (
    <>
      <div className="flex items-start justify-between w-full px-8 pt-45 md:px-16 max-w-7xl mx-auto gap-16">
          {/* Column 1: Takes up 60% of the wide container */}
          <div className="w-full md:w-3/5">
            <BioCard />
          </div>

          {/* Column 2: Takes up 40% of the container */}
          <div className="w-full md:w-2/5 flex justify-end">
            <Image 
                src="/logan-photo.jpg"
                width={480}
                height={480}
                className="w-full h-auto rounded-3xl object-cover max-w-120"
                alt="Image of Myself to go alongside bio"
                priority
            />
          </div>
      </div>

      {/* Featured Work Section */}
      <div className="flex flex-col items-center justify-center pt-30">
        <FeaturedWork />
      </div>
    </>
  );
}
