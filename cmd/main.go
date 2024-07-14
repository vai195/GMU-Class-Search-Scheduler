package main

import (
	"log"

	"github.com/vai195/gogmuclassdb/cmd/api"
	"github.com/vai195/gogmuclassdb/config"
	"github.com/vai195/gogmuclassdb/db"
)

func main() {

	mongoClient, err := db.ConnectToMongo(config.Envs.MongoLink)

	if err != nil {
		log.Fatal(err)
	}
	server := api.NewAPIServer(":8080", mongoClient)

	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}
