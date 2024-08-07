"use client";

import LoadingButton from "@/components/loading-button";
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

function Subjectcoursepage() {
  const [subject, setSubject] = useState("");
  const [results, setResults] = useState<classprops[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `${process.env.GCLOUD_URL}/api/subjectcourse/${subject.toUpperCase()}`,
      { method: "GET" }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setLoading(false);
    }
    if (response.ok) {
      setError("");
      setLoading(false);
      setResults(json);
      setSubject("");
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
          <LoadingButton
            loading={loading}
            disabled={subject === ""}
            type='submit'>
            Search
          </LoadingButton>
        </form>
        {error && (
          <div className='text-red-500 border-red-500 border p-2 rounded bg-foreground'>
            {error}
          </div>
        )}
      </div>

      {results && results.length > 0 && <div>Search Results</div> && (
        <Table className='rounded shadow-lg bg-primary text-primary-foreground hover:bg-primary/90'>
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

export default Subjectcoursepage;
