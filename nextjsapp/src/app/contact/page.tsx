import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function contactpage() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded shadow-lg'>
      <h1 className='text-3xl font-extrabold transition-all'>Contact Me</h1>
      <p className='max-w-prose text-center'>
        Hi thank you for your intrest in contacting me!
      </p>
      <p className='max-w-prose text-center'>
        I value open communication and would love to hear from you. I am welcome
        to any inquires, feedback, or even collabortation oppurtunities. Please
        feel free to get in touch via email or LinkedIn especially if you catch
        any errors or bugs.
      </p>
      <div className='flex gap-5'>
        <Link href='vksonnakul@gmail.com'>
          <Mail size={50} className='hover:text-yellow-300' />
        </Link>

        <Link href='https://www.linkedin.com/in/vaibhav-sonnakul/'>
          <Linkedin size={50} className='hover:text-yellow-300' />
        </Link>
        <Link href='https://github.com/vai195'>
          <Github size={50} className='hover:text-yellow-300' />
        </Link>
      </div>
    </div>
  );
}

export default contactpage;
