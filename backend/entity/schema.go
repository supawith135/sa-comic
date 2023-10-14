package entity

import (
	"time"
	"gorm.io/gorm"
)

// // Entity Comic
// type Comic struct {
// 	gorm.Model
// 	Title       string
// 	Description string
// 	Url         string
// 	Price       float32
// 	Image       string `gorm:"type:longtext"`

// 	// CategoryID ทำหน้าที่เป็น FK
// 	CategoryID *uint
// 	Category   Category `gorm:"foreignKey:CategoryID"`
// }

// // Entity Category
// type Category struct {
// 	gorm.Model
// 	Name   string
// 	Comics []Comic `gorm:"foreignKey:CategoryID"`
// }
type Appove struct {
	gorm.Model
	Note string

	Admin_id *uint
	Admin Admin  `gorm:"references:id"`

	Payment_id *uint
	Payment Payment   `gorm:"references:id"`



}
type Payment struct {
	gorm.Model
	Image       string `gorm:"type:longtext"`
	Date      time.Time

	Basket_id *uint
	Basket Basket `gorm:"references:id"`

	Status_id *uint
	Status 	Status `gorm:"references:id"`
	
	Appove []Appove `gorm:"foreignKey:Payment_id"`
}

type Status struct {
	gorm.Model
	Status string

	Payment []Payment `gorm:"foreignKey:Status_id"`


}

type Admin struct {
	gorm.Model
	Email string
	Password string

	Appove []Appove `gorm:"foreignKey:Admin_id"`
	Comic []Comic `gorm:"foreignKey:Admin_id"`

}
type Basket struct {
	gorm.Model
	Total float64

	Member_id *uint
	Member Member  `gorm:"references:id"`

	Comic_id *uint
	Comic Comic  	`gorm:"references:id"`

	Payment []Payment `gorm:"foreignKey:Basket_id"`
	
}

type Member struct {
	gorm.Model
	Email string
	Username string
	Password string

	Gender_id *uint
	Gender Gender  	`gorm:"references:id"`
	Basket []Basket `gorm:"foreignKey:Member_id"`
}

type Gender struct {
	gorm.Model
	Name string

	Member []Member `gorm:"foreignKey:Gender_id"`

}

type Comic struct {
	gorm.Model
	Image string  `gorm:"type:longtext"`
	Title string
	Description string
	Url string 
	Price float64

	Category_id *uint
	Category Category `gorm:"references:id"`

	Admin_id *uint
	Admin Admin  `gorm:"references:id"`

	Basket []Basket `gorm:"foreignKey:Comic_id"`
	Review []Review `gorm:"foreignKey:Comic_id"`
	
}

type Category struct {
	gorm.Model
	Name string
	
	Comic []Comic `gorm:"foreignKey:Category_id"`

}

type Review struct {
	gorm.Model
	Comment string

	Comic_id *uint
	Comic Comic  `gorm:"references:id"`

	Rating_id *uint
	Rating Rating  `gorm:"references:id"`
}

type Rating struct {
	gorm.Model
	Score uint

	Review []Review  `gorm:"foreignKey:Rating_id"`
}