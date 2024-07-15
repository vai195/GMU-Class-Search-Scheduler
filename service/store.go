package service

import (
	"context"
	"fmt"

	"github.com/vai195/gogmuclassdb/types"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

const (
	ClassesCollection = "classes"
	Dbname            = "gmuDB"
)

type Store struct {
	db *mongo.Client
}

func NewStore(db *mongo.Client) *Store {
	return &Store{db: db}
}

func (s *Store) GetClassesDB(ctx context.Context) ([]*types.Class, error) {

	coll := s.db.Database(Dbname).Collection(ClassesCollection)

	cursor, err := coll.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}

	var classes []*types.Class
	if err = cursor.All(ctx, &classes); err != nil {
		return nil, err
	}

	return classes, nil
}

func (s *Store) SearchClassDB(ctx context.Context, searchTerm string) ([]*types.Class, error) {

	coll := s.db.Database(Dbname).Collection(ClassesCollection)

	if searchTerm == "" {
		return nil, fmt.Errorf("search term cannot be empty")
	}

	searchStage := bson.D{{"$search", bson.D{{"index", "class_search"}, {"text", bson.D{{"query", searchTerm}, {"path", bson.A{"courseReferenceNumber", "courseNumber", "subject", "subjectDescription", "sequenceNumber", "courseTitle", "subjectCourse", "faculty.displayName", "faculty.emailAddress"}}, {"fuzzy", bson.D{}}}}}}}

	projectStage := bson.D{{"$project", bson.D{{"_id", 0}, {"id", 1}, {"term", 1}, {"termDesc", 1}, {"courseReferenceNumber", 1}, {"courseNumber", 1}, {"subject", 1}, {"subjectDescription", 1}, {"sequenceNumber", 1}, {"scheduleTypeDescription", 1}, {"courseTitle", 1}, {"subjectCourse", 1}, {"faculty", bson.D{{"displayName", 1}, {"emailAddress", 1}}}, {"meetingsFaculty", bson.D{{"meetingTime", bson.D{{"beginTime", 1}, {"buildingDescription", 1}, {"room", 1}, {"startDate", 1}, {"endTime", 1}, {"monday", 1}, {"tuesday", 1}, {"wednesday", 1}, {"thursday", 1}, {"friday", 1}, {"saturday", 1}, {"sunday", 1}}}}}}}}
	cursor, err := coll.Aggregate(ctx, mongo.Pipeline{searchStage, projectStage})
	if err != nil {
		return nil, err
	}

	var classes []*types.Class
	if err = cursor.All(ctx, &classes); err != nil {
		return nil, err
	}

	return classes, nil
}

func (s *Store) GetClassDBbyCRN(ctx context.Context, crn string) ([]*types.Class, error) {
	coll := s.db.Database(Dbname).Collection(ClassesCollection)

	if crn == "" {
		return nil, fmt.Errorf("search term cannot be empty")
	}

	cursor, err := coll.Find(ctx, bson.M{"courseReferenceNumber": crn})
	if err != nil {
		return nil, err
	}

	var classes []*types.Class
	if err = cursor.All(ctx, &classes); err != nil {
		return nil, err
	}

	return classes, nil
}

func (s *Store) GetClassDBbySubjectCourse(ctx context.Context, sc string) ([]*types.Class, error) {
	coll := s.db.Database(Dbname).Collection(ClassesCollection)

	if sc == "" {
		return nil, fmt.Errorf("search term cannot be empty")
	}

	cursor, err := coll.Find(ctx, bson.M{"subjectCourse": sc})
	if err != nil {
		return nil, err
	}

	var classes []*types.Class
	if err = cursor.All(ctx, &classes); err != nil {
		return nil, err
	}

	return classes, nil
}
