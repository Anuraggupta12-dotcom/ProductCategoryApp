import { Component } from '@angular/core';

interface SubProduct{
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface Category{
  name: string;
  image: string;
  subProducts: SubProduct[];
}

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  categories : Category[] = [
    {
      name: 'Electronics',
      image: 'assests/categoryImages/electronic.jpeg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },

    {
      name: 'Kitchen',
      image: 'assests/kitchen.jpg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },

    {
      name: 'Mobile',
      image: 'assests/mobile.jpg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },

    {
      name: 'Laptop',
      image: 'assests/laptop.jpg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },

    {
      name: 'Flight',
      image: 'assests/flight.jpg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },

    {
      name: 'Furniture',
      image: 'assests/furniture.jpg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },

    {
      name: 'Grocery',
      image: 'assests/grocery.jpg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },

    {
      name: 'Fashion',
      image: 'assests/fashion.jpg',
      subProducts: [
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099},
      {name: 'Boat Alpha', image: 'assets/Electronic/boat-alpha.webp', quantity: 1, price: 1099}
    ]
    },
    
  ];

  selectedCategory: Category | null = null;

  showSubProducts(category : Category) : void{
    this.selectedCategory = category;
  }

  addToCart(subProduct : SubProduct) : void{
    console.log('Adding to cart', subProduct);
  }

  calculateTotalPrice(subProduct: any){
    return subProduct.quantity = subProduct.price;
  }
}
