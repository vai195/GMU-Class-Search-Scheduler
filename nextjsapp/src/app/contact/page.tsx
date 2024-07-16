import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "GMU Course Scheduler - Contact",
};

function contactpage() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded shadow-lg'>
      <h1 className='text-3xl font-extrabold transition-all'>Contact Me</h1>
      <p className='max-w-prose text-center'>
        Thank you for taking time to reach out to me!
      </p>
      <p className='max-w-prose text-center'>
        I value open communication and am excited to hear from you. I welcome
        any inquiries, feedback, or collaboration opportunities you may have.
        Please do not hesitate to reach out to me via email or LinkedIn. If you
        encounter any issues or bugs, feel free to contact me directly.
      </p>
      <div className='flex gap-5'>
        <Link href='mailto:vksonnakul@gmail.com'>
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
