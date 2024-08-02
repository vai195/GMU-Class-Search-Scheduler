"use client";
import { Button } from "@/components/ui/button";
import Classrow, { classprops } from "@/components/ui/classrow";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";

import { FormEvent, useState } from "react";

function Crnpage() {
  const [crn, setCrn] = useState("");
  const [results, setResults] = useState<classprops[]>([]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${process.env.GCLOUD_URL}/api/crn/${crn}`, {
      method: "GET",
    });
    const json = await response.json();
    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      setResults(json);
      setCrn("");
      console.log("search completed successfully");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center gap-5 p-4'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-3xl font-extrabold'>CRN Search</h1>
        <h1>Enter Course Reference Number</h1>
        <form onSubmit={handleSubmit} className='flex gap-5'>
          <Input
            type='text'
            placeholder='Ex: 123456'
            onChange={(e) => setCrn(e.target.value)}
            value={crn}></Input>
          <Button type='submit'>Search</Button>
        </form>
      </div>

      {results && results.length > 0 && <div>Search Results</div> && (
        <Table className='bg-primary text-primary-foreground hover:bg-primary/90'>
          <TableHeader>
            <TableRow>
              <TableHead>Term</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Course Title</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Building/Room</TableHead>
              <TableHead>Timing</TableHead>
              <TableHead>Days</TableHead>
              <TableHead>CRN</TableHead>
              <TableHead>Add to Calender</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results &&
              results.map((item: classprops) => (
                <Classrow course={item} key={item.id} />
              ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default Crnpage;
