package db

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToMongo(uri string) (*mongo.Client, error) {
	// ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
	// defer cancel()

	// ctx := context.Background()
	// client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	// if err != nil {
	// 	return nil, err
	// }

	// err = client.Ping(ctx, readpref.Primary())
	// return client, err

	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)

	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		panic(err)
	}
	return client, err
}
