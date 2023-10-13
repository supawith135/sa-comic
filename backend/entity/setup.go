package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("sa-66-comic.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	database.AutoMigrate(
		&Category{},
		&Comic{},
	)
	db = database

	//Category Data
	action := Category{
		Name: "แอคชั่น",
	}
	db.Model(&Category{}).Create(&action)

	drama := Category{
		Name: "ดราม่า",
	}
	db.Model(&Category{}).Create(&drama)
}
