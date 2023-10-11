package entity

import (
	"gorm.io/gorm"
)
// Entity Comic
type Comic struct {
	gorm.Model
	Title       string
	Description string
	Url         string
	Price       float32
	Image       string `gorm:"type:longtext"`

	// CategoryID ทำหน้าที่เป็น FK
	CategoryID *uint
	Category   Category `gorm:"foreignKey:CategoryID"`
}

// Entity Category
type Category struct {
	gorm.Model
	Name   string
	Comics []Comic `gorm:"foreignKey:CategoryID"`
}
