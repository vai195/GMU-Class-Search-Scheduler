package types

import "context"

type Store interface {
	GetClassesDB(context.Context) ([]*Class, error)
	SearchClassDB(context.Context, string) ([]*Class, error)
}

type Class struct {
	Id                 int               `bson:"id,omitempty"`
	Term               string            `bson:"term,omitempty"`
	TermDesc           string            `bson:"termDesc,omitempty"`
	CourseRN           string            `bson:"courseReferenceNumber,omitempty"`
	CourseNumber       string            `bson:"courseNumber,omitempty"`
	Subject            string            `bson:"subject,omitempty"`
	SubjectDescription string            `bson:"subjectDescription,omitempty"`
	SequenceNumber     string            `bson:"sequenceNumber,omitempty"`
	ScheduleType       string            `bson:"scheduleTypeDescription,omitempty"`
	CourseTitle        string            `bson:"courseTitle,omitempty"`
	SubjectCourse      string            `bson:"subjectCourse,omitempty"`
	Facultys           []Faculty         `bson:"faculty,omitempty"`
	MeetingsFacultys   []MeetingsFaculty `bson:"meetingsFaculty,omitempty"`
}

type Faculty struct {
	DisplayName  string `bson:"displayName,omitempty"`
	EmailAddress string `bson:"emailAddress,omitempty"`
}

type MeetingsFaculty struct {
	MeetingTimeO MeetingTime `bson:"meetingTime,omitempty"`
}

type MeetingTime struct {
	BeginTime           string `bson:"beginTime,omitempty"`
	BuildingDescription string `bson:"buildingDescription,omitempty"`
	Room                string `bson:"room,omitempty"`
	EndTime             string `bson:"endTime,omitempty"`
	Monday              bool   `bson:"monday,omitempty"`
	Tuesday             bool   `bson:"tuesday,omitempty"`
	Wednesday           bool   `bson:"wednesday,omitempty"`
	Thursday            bool   `bson:"thursday,omitempty"`
	Friday              bool   `bson:"friday,omitempty"`
	Saturday            bool   `bson:"saturday,omitempty"`
	Sunday              bool   `bson:"sunday,omitempty"`
}
