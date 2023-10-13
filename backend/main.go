package main

import (
	"github.com/gin-gonic/gin"
	"github.com/supawith135/sa-66-comic-craze-shop/controller"
	"github.com/supawith135/sa-66-comic-craze-shop/entity"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	// User Routes
	r.GET("/comics", controller.ListComics)
	r.GET("/comics/:id", controller.GetComic)
	r.POST("/comics", controller.CreateComic)
	r.PATCH("/comics", controller.UpdateComic)
	r.DELETE("/comics/:id", controller.DeleteComic)
	// Category Routes
	r.GET("/category", controller.ListCategory)
	r.GET("/category/:id", controller.GetCategory)
	// Run the server
	r.Run()

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, PATCH, DELETE")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
