import Image from "next/image";
import Link from "next/link";
import logo from "../../public/GeorgeMasonUniversity4koCV.png";
import { Button } from "@/components/ui/button";
import { AlignJustify, Book, Hash, Mail, Search } from "lucide-react";
import Themetoggle from "@/components/themetoggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div className='p-4 shadow'>
      <div className='flex flex-wrap max-w-7xl m-auto gap-3 items-center justify-between '>
        <Link href='/' className='flex items-center gap-1'>
          <Image src={logo} alt='PumpUp Logo' width={70} height={70} />
        </Link>
        <div className='sm:flex flex-wrap items-center gap-2 lg:gap-20 hidden'>
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
          <Themetoggle />
        </div>

        <div className='sm:hidden flex gap-2'>
          <Themetoggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <AlignJustify />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href='/search' className='flex items-center gap-3'>
                  <Search /> <span>Search</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/crn' className='flex items-center gap-3'>
                  <Hash /> <span>CRN Search</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/subjectcourse' className='flex items-center gap-3'>
                  <Book /> <span>Subject Course Search</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/contact' className='flex items-center gap-3'>
                  <Mail /> <span>Contact Me</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
