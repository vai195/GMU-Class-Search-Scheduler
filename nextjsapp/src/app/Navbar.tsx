import Image from "next/image";
import Link from "next/link";
import logo from "../../public/GeorgeMasonUniversity4koCV.png";
import { Button } from "@/components/ui/button";
import { Book, Hash, Mail, Search } from "lucide-react";

function Navbar() {
  return (
    <div className='p-4 shadow'>
      <div className='flex flex-wrap max-w-7xl m-auto gap-3 items-center justify-center lg:justify-between '>
        <Link href='/' className='flex items-center gap-1'>
          <Image src={logo} alt='PumpUp Logo' width={70} height={70} />
        </Link>
        <div className='flex flex-wrap items-center gap-2 lg:gap-20'>
          <Button asChild className='gap-1'>
            <Link href='/search'>
              <Search /> Search
            </Link>
          </Button>
          <Button asChild className='gap-1'>
            <Link href='/crn'>
              <Hash /> CRN Search
            </Link>
          </Button>
          <Button asChild className='gap-1'>
            <Link href='/subjectcourse'>
              <Book /> Subject Course Search
            </Link>
          </Button>
          <Button asChild className='gap-1'>
            <Link href='/contact'>
              <Mail /> Contact Me
            </Link>
          </Button>
        </div>{" "}
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
