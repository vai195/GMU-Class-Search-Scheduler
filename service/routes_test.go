package service

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
	"github.com/vai195/gogmuclassdb/types"
)

func TestRoutes(t *testing.T) {

	store := &mockStore{}

	handler := NewHandler(store)

	t.Run("Should get all classes", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/classes", nil)
		if err != nil {
			t.Fatal(err)
		}

		rr := httptest.NewRecorder()

		router := mux.NewRouter()

		router.HandleFunc("/classes", handler.handleClasses)

		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusOK {
			t.Errorf("expect status code %d, got  %d", http.StatusOK, rr.Code)
		}
	})

	t.Run("Should get all classes based on search", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/classes?search=andrea", nil)
		if err != nil {
			t.Fatal(err)
		}

		rr := httptest.NewRecorder()

		router := mux.NewRouter()

		router.HandleFunc("/classes", handler.handleClasses)

		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusOK {
			t.Errorf("expect status code %d, got  %d", http.StatusOK, rr.Code)
		}
	})

	t.Run("Should get all classes based on crn", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/crn/483273", nil)
		if err != nil {
			t.Fatal(err)
		}

		rr := httptest.NewRecorder()

		router := mux.NewRouter()

		router.HandleFunc("/crn/{param}", handler.handleCRN)

		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusOK {
			t.Errorf("expect status code %d, got  %d", http.StatusOK, rr.Code)
		}
	})

	t.Run("Should fail to get all classes based on crn", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/crn", nil)
		if err != nil {
			t.Fatal(err)
		}

		rr := httptest.NewRecorder()

		router := mux.NewRouter()

		router.HandleFunc("/crn", handler.handleCRN)

		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusBadRequest {
			t.Errorf("expect status code %d, got  %d", http.StatusBadRequest, rr.Code)
		}
	})

	t.Run("Should get all classes based on subject course", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/subjectcourse/CS310", nil)
		if err != nil {
			t.Fatal(err)
		}

		rr := httptest.NewRecorder()

		router := mux.NewRouter()

		router.HandleFunc("/subjectcourse/{param}", handler.handleSubjectCourse)

		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusOK {
			t.Errorf("expect status code %d, got  %d", http.StatusOK, rr.Code)
		}
	})

	t.Run("Should fail to get all classes based on subject course", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/subjectcourse", nil)
		if err != nil {
			t.Fatal(err)
		}

		rr := httptest.NewRecorder()

		router := mux.NewRouter()

		router.HandleFunc("/subjectcourse", handler.handleSubjectCourse)

		router.ServeHTTP(rr, req)

		if rr.Code != http.StatusBadRequest {
			t.Errorf("expect status code %d, got  %d", http.StatusBadRequest, rr.Code)
		}
	})

}

type mockStore struct{}

func (m *mockStore) GetClassesDB(ctx context.Context) ([]*types.Class, error) {
	return []*types.Class{}, nil
}

func (m *mockStore) SearchClassDB(ctx context.Context, searchTerm string) ([]*types.Class, error) {
	return []*types.Class{}, nil
}

func (m *mockStore) GetClassDBbyCRN(ctx context.Context, crn string) ([]*types.Class, error) {
	return []*types.Class{}, nil
}

func (m *mockStore) GetClassDBbySubjectCourse(ctx context.Context, sc string) ([]*types.Class, error) {
	return []*types.Class{}, nil
}
