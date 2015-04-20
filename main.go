package main

import (
    "os"
    "net/http"
    "github.com/asm-products/confable-web/controllers"
    // "github.com/asm-products/confable-web/addon"
    "github.com/asm-products/confable-web/templates"
    // "github.com/asm-products/confable-web/models"
    "github.com/codegangsta/negroni"
    "github.com/gorilla/mux"
)

func main() { 
    port := os.Getenv("PORT")
    if port == "" {
        port = "3000"
    }
    host := os.Getenv("HOST")

    templates.Init("templates")
    // models.InitDb(os.Getenv("DATABASE_URL"))
    // addon.Init(os.Getenv("HEROKU_ID"), os.Getenv("HEROKU_API_PASSWORD"), os.Getenv("HEROKU_SSO_SALT"))

    r := mux.NewRouter()

    // new(controllers.AccountsController).Init(r)
    // new(controllers.HerokuResourcesController).Init(r)
    new(controllers.HomeController).Init(r)
    // new(controllers.ImagesController).Init(r)
    new(controllers.TestController).Init(r)
    // new(controllers.SessionsController).Init(r)
    // new(controllers.SsoSessionsController).Init(r)

    r.PathPrefix("/").Handler(http.FileServer(http.Dir("static")))

    n := negroni.Classic()
    n.UseHandler(r)
    n.Run(host + ":" + port)
}
