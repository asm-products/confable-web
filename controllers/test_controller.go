package controllers

import (
    "net/http"
    "github.com/gorilla/mux"
)

type TestController struct {
}

func (c *TestController) Init(r *mux.Router) {
    r.HandleFunc("/api/test", c.Create).Methods("GET")
}

func (c *TestController) Create(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    w.Write([]byte("{'token': 'hi'}"))
}
