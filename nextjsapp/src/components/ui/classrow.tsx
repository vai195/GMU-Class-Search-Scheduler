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
  meetingsFaculty?: meetingsfacultyprop[];
}

interface meetingsfacultyprop {
  meetingTime: meetingtimeprop;
}
interface meetingtimeprop {
  beginTime: string;
  buildingDescription: string;
  room: string;
  startDate: string;
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

function convertDateAndTime(dateString: string, timeString: string) {
  if (!dateString || !timeString) {
    return "";
  }
  const dateParts = dateString.split("/");
  const year = dateParts[2];
  const month = String(dateParts[0]).padStart(2, "0");
  const day = String(dateParts[1]).padStart(2, "0");

  const timeParts = timeString.split("");
  const hours = timeParts.slice(0, 2).join("");
  const minutes = timeParts.slice(2).join("");

  const formattedDate = `${year}${month}${day}`;
  const formattedTime = `${hours}${minutes}00`;

  const startTime = `${formattedDate}T${formattedTime}`;

  return startTime;
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
          {course.meetingsFaculty &&
            course.meetingsFaculty.length !== 0 &&
            course.meetingsFaculty[0].meetingTime.buildingDescription +
              " " +
              course.meetingsFaculty[0].meetingTime.room}
        </TableCell>
        <TableCell>
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.beginTime &&
            course.meetingsFaculty[0].meetingTime.endTime &&
            convertMilitaryTimeToStandard(
              course.meetingsFaculty[0].meetingTime.beginTime
            ) +
              "-" +
              convertMilitaryTimeToStandard(
                course.meetingsFaculty[0].meetingTime.endTime
              )}
        </TableCell>
        <TableCell className='flex mt-4'>
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.monday && (
              <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
                M
              </div>
            )}
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.tuesday && (
              <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
                T
              </div>
            )}
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.wednesday && (
              <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
                W
              </div>
            )}
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.thursday && (
              <div className='flex justify-center items-center w-5 h-4 bg-foreground  text-background border'>
                Th
              </div>
            )}
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.friday && (
              <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
                F
              </div>
            )}
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.saturday && (
              <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
                S
              </div>
            )}
          {course.meetingsFaculty &&
            course.meetingsFaculty[0].meetingTime.sunday && (
              <div className='flex justify-center items-center w-4 h-4 bg-foreground  text-background border'>
                Su
              </div>
            )}
        </TableCell>
        <TableCell>{course.courseReferenceNumber}</TableCell>
        <TableCell>
          {course.meetingsFaculty && (
            <Button asChild variant='secondary'>
              <Link
                href={`https://calendar.google.com/calendar/u/0/r/eventedit?dates=${convertDateAndTime(
                  course.meetingsFaculty[0].meetingTime.startDate,
                  course.meetingsFaculty[0].meetingTime.beginTime
                )}/${convertDateAndTime(
                  course.meetingsFaculty[0].meetingTime.startDate,
                  course.meetingsFaculty[0].meetingTime.endTime
                )}&text=${
                  course.courseTitle +
                  " " +
                  course.subjectCourse +
                  " " +
                  course.sequenceNumber
                }&location=${
                  course.meetingsFaculty[0].meetingTime.buildingDescription +
                  " " +
                  course.meetingsFaculty[0].meetingTime.room
                }&recur=RRULE:FREQ%3DWEEKLY&details=Instructor:${
                  course.faculty &&
                  course.faculty.length !== 0 &&
                  course.faculty[0].displayName
                } days:${
                  course.meetingsFaculty[0].meetingTime.monday ? "M" : ""
                }+${course.meetingsFaculty[0].meetingTime.tuesday ? "T" : ""}+${
                  course.meetingsFaculty[0].meetingTime.wednesday ? "W" : ""
                }+${
                  course.meetingsFaculty[0].meetingTime.thursday ? "Th" : ""
                }+${course.meetingsFaculty[0].meetingTime.friday ? "F" : ""}+${
                  course.meetingsFaculty[0].meetingTime.saturday ? "S" : ""
                }+${course.meetingsFaculty[0].meetingTime.sunday ? "Su" : ""}`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='40'
                  height='40'
                  viewBox='0 0 48 48'>
                  <path
                    fill='#FFC107'
                    d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'></path>
                  <path
                    fill='#FF3D00'
                    d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'></path>
                  <path
                    fill='#4CAF50'
                    d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'></path>
                  <path
                    fill='#1976D2'
                    d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'></path>
                </svg>
              </Link>
            </Button>
          )}
          {!course.meetingsFaculty && "No meeting times available"}
        </TableCell>
      </TableRow>
    </>
  );
}

export default Classrow;
