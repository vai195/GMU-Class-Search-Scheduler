package types

import "context"

type Store interface {
	GetClassesDB(context.Context) ([]*Class, error)
	SearchClassDB(context.Context, string) ([]*Class, error)
	GetClassDBbyCRN(context.Context, string) ([]*Class, error)
	GetClassDBbySubjectCourse(context.Context, string) ([]*Class, error)
}

type Class struct {
	Id                 int               `json:"id,omitempty" bson:"id,omitempty"`
	Term               string            `json:"term,omitempty" bson:"term,omitempty"`
	TermDesc           string            `json:"termDesc,omitempty" bson:"termDesc,omitempty"`
	CourseRN           string            `json:"courseReferenceNumber,omitempty" bson:"courseReferenceNumber,omitempty"`
	CourseNumber       string            `json:"courseNumber,omitempty" bson:"courseNumber,omitempty"`
	Subject            string            `json:"subject,omitempty" bson:"subject,omitempty"`
	SubjectDescription string            `json:"subjectDescription,omitempty" bson:"subjectDescription,omitempty"`
	SequenceNumber     string            `json:"sequenceNumber,omitempty" bson:"sequenceNumber,omitempty"`
	ScheduleType       string            `json:"scheduleTypeDescription,omitempty" bson:"scheduleTypeDescription,omitempty"`
	CourseTitle        string            `json:"courseTitle,omitempty" bson:"courseTitle,omitempty"`
	SubjectCourse      string            `json:"subjectCourse,omitempty" bson:"subjectCourse,omitempty"`
	Facultys           []Faculty         `json:"faculty,omitempty" bson:"faculty,omitempty"`
	MeetingsFacultys   []MeetingsFaculty `json:"meetingsFaculty,omitempty" bson:"meetingsFaculty,omitempty"`
}

type Faculty struct {
	DisplayName  string `json:"displayName,omitempty" bson:"displayName,omitempty"`
	EmailAddress string `json:"emailAddress,omitempty" bson:"emailAddress,omitempty"`
}

type MeetingsFaculty struct {
	MeetingTimeO MeetingTime `json:"meetingTime,omitempty" bson:"meetingTime,omitempty"`
}

type MeetingTime struct {
	BeginTime           string `json:"beginTime,omitempty" bson:"beginTime,omitempty"`
	BuildingDescription string `json:"buildingDescription,omitempty" bson:"buildingDescription,omitempty"`
	Room                string `json:"room,omitempty" bson:"room,omitempty"`
	EndTime             string `json:"endTime,omitempty" bson:"endTime,omitempty"`
	Monday              bool   `json:"monday,omitempty" bson:"monday,omitempty"`
	Tuesday             bool   `json:"tuesday,omitempty" bson:"tuesday,omitempty"`
	Wednesday           bool   `json:"wednesday,omitempty" bson:"wednesday,omitempty"`
	Thursday            bool   `json:"thursday,omitempty" bson:"thursday,omitempty"`
	Friday              bool   `json:"friday,omitempty" bson:"friday,omitempty"`
	Saturday            bool   `json:"saturday,omitempty" bson:"saturday,omitempty"`
	Sunday              bool   `json:"sunday,omitempty" bson:"sunday,omitempty"`
}
