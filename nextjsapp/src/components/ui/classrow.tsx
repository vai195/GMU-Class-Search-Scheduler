import React from "react";

interface classprops {
  id: number;
  term: string;
  termDesc: string;
  courseReferenceNumber: string;
  courseNumber: string;
  subject: string;
  subjectDescription: string;
  courseTitle: string;
  subjectCourse: string;
  faculty: facultyprop[];
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

function Classrow() {
  return <div>Classrow</div>;
}

export default Classrow;
