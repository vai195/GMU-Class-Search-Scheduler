package service

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/vai195/gogmuclassdb/utils"
)

type Handler struct {
	store *Store
}

func NewHandler(store *Store) *Handler {

	return &Handler{
		store: store,
	}
}

func (h *Handler) RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/classes", h.handleClasses).Methods("GET")
	router.HandleFunc("/search/{param}", h.handleSearch).Methods("GET")
	router.HandleFunc("/crn/{param}", h.handleCRN).Methods("GET")
	router.HandleFunc("/subjectcourse/{param}", h.handleSubjectCourse).Methods("GET")
}

func (h *Handler) handleClasses(w http.ResponseWriter, r *http.Request) {
	classes, err := h.store.GetClassesDB(r.Context())

	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
	}

	utils.WriteJSON(w, http.StatusOK, classes)
}

func (h *Handler) handleSearch(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	str, ok := vars["param"]
	if !ok {
		log.Printf("no param: %v in request", "param")
		utils.WriteError(w, http.StatusInternalServerError, fmt.Errorf("no param: %v in request", "param"))
	}
	classes, err := h.store.SearchClassDB(r.Context(), str)

	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
	}

	utils.WriteJSON(w, http.StatusOK, classes)
}

func (h *Handler) handleCRN(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	str, ok := vars["param"]
	if !ok {
		log.Printf("no param: %v in request", "param")
		utils.WriteError(w, http.StatusInternalServerError, fmt.Errorf("no param: %v in request", "param"))
	}
	classes, err := h.store.GetClassDBbyCRN(r.Context(), str)

	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
	}

	utils.WriteJSON(w, http.StatusOK, classes)
}

func (h *Handler) handleSubjectCourse(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	str, ok := vars["param"]
	if !ok {
		log.Printf("no param: %v in request", "param")
		utils.WriteError(w, http.StatusInternalServerError, fmt.Errorf("no param: %v in request", "param"))
	}
	classes, err := h.store.GetClassDBbySubjectCourse(r.Context(), str)

	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
	}

	utils.WriteJSON(w, http.StatusOK, classes)
}
