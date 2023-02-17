import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/i-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  prdlist:IProduct[];
  constructor(){
    this.prdlist=[
      {id:1,
        name:'Wadi Food Natural Green Olives | Canned Food | Grocery Shopping',
        price:80.00,
        count:0,
        image:'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/6/2/6223000191392_ugyh.png',
        rate:7.5,
        description:'Generic',
        createdAt:'2022-09-30T16:41:31.124Z',
        reviews:[
          "reviews 1",
          "Good Product",
          "Recommended"
       ],
      },
      {id:2,
        name:'Mayonnaise Png, Transparent Png - kindpng',
        price:198.00,
        count:20,
        image:'https://www.kindpng.com/picc/m/374-3744320_mayonnaise-png-transparent-png.png',
        rate:6,
        description:'Product description goes here',
        createdAt:'2022-09-30T02:45:19.349Z',
        reviews:[
          "Great one"
       ]
      },

      {id:3,
        name:'Muesli Fitness (500g)',
        price:828.00,
        count:10,
        image:'https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.jpg',
        rate:9,
        description:'Muesli Fitness Nutritious Energy, Gluten Free (500g) – Grocery Store',
        createdAt:'2022-09-30T07:21:14.130Z',
        reviews:[
          "reviews 3"
       ]
      },

      {id:4,
        name:'Al Doha Egyptian Rice-5 kg',
        price:929.00,
        count:25,
        image:'https://demo2.madrasthemes.com/cartzilla/grocery/wp-content/uploads/sites/5/2020/04/01.jpg',
        rate:6.5,
        description:'Refined',
        createdAt:'2022-09-30T02:32:29.522Z',
        reviews:[
          "reviews 4"
       ]
      },

      {id:5,
        name:'23 Black-Owned',
        price:85.00,
        count:0,
        image:'https://cdn.apartmenttherapy.info/image/upload/v1597243598/k/Design/k-essentials-grocery-2020/photos/Morton-Z/Zach_Zoe-Wildflower-Jar-Front-HighRes.png',
        rate:5,
        description:'Unbranded',
        createdAt:'2022-09-30T03:09:25.056Z',
        reviews:[
          "reviews 5"
       ]
      },

      {id:6,
        name:'Tomato Ketckup',
        price:638.00,
        count:60,
        image:'https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/heinz-tomato-ketchup.jpg',
        rate:2.5,
        description:'Sleek',
        createdAt:'2022-09-30T11:57:53.372Z',
        reviews:[
          "reviews 6"
       ]
      },
    ]

}
}
