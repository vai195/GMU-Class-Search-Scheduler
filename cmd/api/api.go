package api

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/vai195/gogmuclassdb/service"
	"go.mongodb.org/mongo-driver/mongo"
)

type APIServer struct {
	addr string
	db   *mongo.Client
}

func NewAPIServer(addr string, db *mongo.Client) *APIServer {

	return &APIServer{addr: addr, db: db}
}

func (s *APIServer) Run() error {

	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api").Subrouter()

	classStore := service.NewStore(s.db)
	classHandler := service.NewHandler(classStore)
	classHandler.RegisterRoutes(subrouter)
	log.Println("Listening on", s.addr)

	return http.ListenAndServe(s.addr, router)
}
