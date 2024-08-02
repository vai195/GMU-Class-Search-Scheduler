import Image from "next/image";
import logo from "../../public/GeorgeMasonUniversity2CH.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Search } from "lucide-react";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-5'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <Image src={logo} alt='GMU H Logo' width={300} height={300} />
        <span className='font-extrabold tracking-tight text-2xl lg:text-4xl'>
          Welcome to the GMU Course Search and Scheduler
        </span>
      </div>
      <p className='max-w-prose text-center '>
        Search for your courses and seemlessly add them to your calendar without
        the need to login into patriot web. Currently only supporting CS and SWE
        courses but will continuously add more subjects . Contact me for any
        issues or inquires about the website. (Subjects supported listed on
        github, request me to add major specific courses not currenlty added or
        update course information)
      </p>
      <Button size='lg' asChild className='gap-1'>
        <Link href='/search'>
          <Search />
          Get Started Searching
        </Link>
      </Button>
      <Link href='https://github.com/vai195/GMU-Class-Search-Scheduler'>
        <Github />
      </Link>
    </div>
  );
}
