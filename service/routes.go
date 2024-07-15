package service

import (
	"fmt"

	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/vai195/gogmuclassdb/types"
	"github.com/vai195/gogmuclassdb/utils"
)

type Handler struct {
	store types.Store
}

func NewHandler(store types.Store) *Handler {

	return &Handler{
		store: store,
	}
}

func (h *Handler) RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/classes", h.handleClasses).Methods("GET")
	router.HandleFunc("/crn", h.handleCRN).Methods("GET")
	router.HandleFunc("/crn/{param}", h.handleCRN).Methods("GET")
	router.HandleFunc("/subjectcourse", h.handleSubjectCourse).Methods("GET")
	router.HandleFunc("/subjectcourse/{param}", h.handleSubjectCourse).Methods("GET")
}

func (h *Handler) handleClasses(w http.ResponseWriter, r *http.Request) {

	search := r.URL.Query().Get("search")

	if search != "" {
		classes, err := h.store.SearchClassDB(r.Context(), search)

		if err != nil {
			utils.WriteError(w, http.StatusInternalServerError, err)
			return
		}
		if classes == nil {
			utils.WriteError(w, http.StatusNotFound, fmt.Errorf("could not find any class based on search"))
			return
		}

		utils.WriteJSON(w, http.StatusOK, classes)
	} else {
		classes, err := h.store.GetClassesDB(r.Context())
		if err != nil {
			utils.WriteError(w, http.StatusInternalServerError, err)
			return
		}

		utils.WriteJSON(w, http.StatusOK, classes)
	}

}

func (h *Handler) handleCRN(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	str, ok := vars["param"]
	if !ok {

		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("no crn in request"))
		return
	}
	classes, err := h.store.GetClassDBbyCRN(r.Context(), str)

	if err != nil {
		log.Printf("Error: %v", err)
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}
	if classes == nil {
		utils.WriteError(w, http.StatusNotFound, fmt.Errorf("course not found"))
		return
	}

	utils.WriteJSON(w, http.StatusOK, classes)
}

func (h *Handler) handleSubjectCourse(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	str, ok := vars["param"]
	if !ok {

		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("no subjectcourse in request"))
		return
	}
	classes, err := h.store.GetClassDBbySubjectCourse(r.Context(), str)

	if err != nil {
		log.Printf("Error: %v", err)
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}
	if classes == nil {
		utils.WriteError(w, http.StatusNotFound, fmt.Errorf("course not found"))
		return
	}

	utils.WriteJSON(w, http.StatusOK, classes)
}

// func (h *Handler) handleSearch(w http.ResponseWriter, r *http.Request) {
// 	vars := mux.Vars(r)
// 	str, ok := vars["param"]
// 	if !ok {
// 		// log.Printf("no param: %v in request", "param")
// 		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("no search term in request"))
// 		return
// 	}
// 	classes, err := h.store.SearchClassDB(r.Context(), str)

// 	if err != nil {
// 		utils.WriteError(w, http.StatusInternalServerError, err)
// 		return
// 	}

// 	utils.WriteJSON(w, http.StatusOK, classes)
// }
