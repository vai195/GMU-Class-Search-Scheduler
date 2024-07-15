"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormEvent, useState } from "react";

function Subjectcoursepage() {
  const [subject, setSubject] = useState("");
  const [results, setResults] = useState([]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `https://gmu-class-search-scheduler-xxxdzxguea-uk.a.run.app/api/subjectcourse/${subject.toUpperCase()}`,
      { method: "GET" }
    );
    const json = await response.json();
    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      setResults(json);
      setSubject("");
      console.log("search completed successfully");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center gap-5 p-4'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-3xl font-extrabold'>Subject Course Search</h1>
        <h1>Enter Subject + Course Number</h1>
        <form onSubmit={handleSubmit} className='flex gap-5'>
          <Input
            type='text'
            placeholder='Ex: CS110, cs310'
            onChange={(e) => setSubject(e.target.value)}
            value={subject}></Input>
          <Button type='submit'>Search</Button>
        </form>
      </div>

      <div>Search Results</div>

      <Table className='bg-background text-primary-foreground'>
        <TableHeader>
          <TableRow>
            <TableHead>Term</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Course Title</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Building/Room</TableHead>
            <TableHead>Timing</TableHead>
            <TableHead>Days</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </div>
  );
}

export default Subjectcoursepage;
