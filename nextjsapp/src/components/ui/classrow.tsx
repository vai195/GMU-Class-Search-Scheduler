import Link from "next/link";
import { Button } from "./button";
import { TableCell, TableRow } from "./table";

export interface classprops {
  id: number;
  term: string;
  termDesc: string;
  courseReferenceNumber: string;
  courseNumber: string;
  subject: string;
  subjectDescription: string;
  sequenceNumber: string;
  scheduleTypeDescription: string;
  courseTitle: string;
  subjectCourse: string;
  faculty?: facultyprop[];
  meetingsFaculty: meetingsfacultyprop[];
}

interface meetingsfacultyprop {
  meetingTime: meetingtimeprop;
}
interface meetingtimeprop {
  beginTime: string;
  buildingDescription: string;
  room: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}
interface facultyprop {
  displayName: string;
  emailAddress: string;
}

function convertMilitaryTimeToStandard(timeString: string) {
  let militaryTime = timeString.slice(0, 2) + ":" + timeString.slice(2);
  let [hours, minutes] = militaryTime.split(":");
  let period = Number(hours) >= 12 ? "PM" : "AM";
  hours = String(Number(hours) % 12 || 12); // handle midnight (00:00) as 12 AM
  return `${hours}:${minutes}${period}`;
}

function Classrow({ course }: { course: classprops }) {
  return (
    <>
      <TableRow>
        <TableCell>{course.termDesc}</TableCell>
        <TableCell>
          {course.subjectCourse}
          {"-"}
          {course.sequenceNumber}
        </TableCell>
        <TableCell>{course.courseTitle}</TableCell>
        <TableCell>
          {course.faculty &&
            course.faculty?.length !== 0 &&
            course.faculty[0].displayName}
          {!course.faculty ||
            (course.faculty?.length === 0 && "No Instructor Assigned")}
        </TableCell>
        <TableCell>
          {course.meetingsFaculty[0].meetingTime.buildingDescription}{" "}
          {course.meetingsFaculty[0].meetingTime.room}
        </TableCell>
        <TableCell>
          {course.meetingsFaculty[0].meetingTime.beginTime &&
            course.meetingsFaculty[0].meetingTime.endTime &&
            convertMilitaryTimeToStandard(
              course.meetingsFaculty[0].meetingTime.beginTime
            ) +
              "-" +
              convertMilitaryTimeToStandard(
                course.meetingsFaculty[0].meetingTime.endTime
              )}
        </TableCell>
        <TableCell className='flex mt-6'>
          {course.meetingsFaculty[0].meetingTime.monday && (
            <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
              M
            </div>
          )}
          {course.meetingsFaculty[0].meetingTime.tuesday && (
            <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
              T
            </div>
          )}
          {course.meetingsFaculty[0].meetingTime.wednesday && (
            <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
              W
            </div>
          )}
          {course.meetingsFaculty[0].meetingTime.thursday && (
            <div className='flex justify-center items-center w-5 h-4 bg-foreground  text-background border'>
              Th
            </div>
          )}
          {course.meetingsFaculty[0].meetingTime.friday && (
            <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
              F
            </div>
          )}
          {course.meetingsFaculty[0].meetingTime.saturday && (
            <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
              S
            </div>
          )}
          {course.meetingsFaculty[0].meetingTime.sunday && (
            <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
              Su
            </div>
          )}
        </TableCell>
        <TableCell>{course.courseReferenceNumber}</TableCell>
        <TableCell>
          <Button asChild variant='secondary'>
            <Link href={`https://google.com`}>Add</Link>
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Classrow;
