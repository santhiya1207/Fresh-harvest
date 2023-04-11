import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  
  constructor() { }
  getProduct(): any[] {
    return [
      { productId: 1, productName: "Apple", productCategory: "Fruits", productPrice: "50", image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Apple can keeps your taste buds happy and satisfied. Give it a try and see for yourself!" },
      { productId: 2, productName: "Lemons", productCategory: "Fruits", productPrice: "10", image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "When life gives you Lemons, make Lemonade - or use them to brighten up your favorite dishes with their zesty, tangy flavor." },
      { productId: 3, productName: "Mangoes", productCategory: "Fruits", productPrice: "30", image: "https://images.pexels.com/photos/7156058/pexels-photo-7156058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Mangoes are a tropical paradise in your mouth - their juicy sweetness and exotic flavor will transport you to a far-off island." },
      { productId: 4, productName: "Strawberry", productCategory: "Fruits", productPrice: "90", image: "https://images.pexels.com/photos/4753647/pexels-photo-4753647.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Strawberries are red. They're good for your blood." },
      { productId: 5, productName: "Watermelon", productCategory: "Fruits", productPrice: "85", image: "https://images.pexels.com/photos/1398655/pexels-photo-1398655.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Hot summer days ahead. It's time for a lot of watermelons." },
      { productId: 6, productName: "Guava", productCategory: "Fruits", productPrice: "60", image: "https://media.istockphoto.com/id/171575811/photo/guava.jpg?b=1&s=612x612&w=0&k=20&c=P-h7pFD35YP0rR3BvT7JWv9x3zrXRlxZeGRqTgwidQg=",
      description: "There's nothing quite like the sweet, juicy flavor of a perfectly ripe guava." },
      { productId: 7, productName: "Banana", productCategory: "Fruits", productPrice: "45", image: "https://images.pexels.com/photos/10112720/pexels-photo-10112720.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Eat banana in a break to get breakfree nutrients" },
      { productId: 8, productName: "Grapes ", productCategory: "Fruits", productPrice: "70", image: "https://images.pexels.com/photos/545036/pexels-photo-545036.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Grapes are nature's candy - a delicious and healthy treat" },
      { productId: 9, productName: "Plums", productCategory: "Fruits", productPrice: "125", image: "https://images.pexels.com/photos/1268122/pexels-photo-1268122.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "A perfectly ripe plum is one of life's simple pleasures." },
      { productId: 10, productName: "Kiwi", productCategory: "Fruits", productPrice: "100", image: "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Satisfy your sweet tooth and boost your health with our delicious kiwi fruits!" },
      { productId: 11, productName: "Pineapple", productCategory: "Fruits", productPrice: "90", image: "https://images.pexels.com/photos/915016/pexels-photo-915016.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Get your daily dose of vitamin C and fiber with our delicious, golden pineapples!" },
      { productId: 12, productName: "Jackfruit", productCategory: "Fruits", productPrice: "230", image: "https://media.istockphoto.com/id/1369037190/photo/single-object-of-jackfruit-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=S2N6qfAskqOkAWsQdQknNTEB-zMwYPKbrCJXHsFFPx4=",
      description: "f you've never tasted jackfruit, you're missing out on the ultimate fruit adventure!" },
      { productId: 13, productName: "Sapota", productCategory: "Fruits", productPrice: "86", image: "https://media.istockphoto.com/id/1467792506/photo/slice-of-sapodilla-chickoo-fruit-with-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=q-tf-BE738-V17Rz8l8HFdCse7qNLPQ4moylciWNPxA=",
      description: "Sapota is nature's dessert, packed with flavor and nutrition in every bite." },
      { productId: 14, productName: "Dragonfruit ", productCategory: "Fruits", productPrice: "92", image: "https://media.istockphoto.com/id/1344251913/photo/pitaya-or-dragon-fruit.jpg?b=1&s=612x612&w=0&k=20&c=wJNRxL9gEOo2hP-f8YcGxIK6FlIOWv4E_WGKACLJUPY=",
      description: "Dragonfruit is both humble and luxurious, with its simple appearance and decadent taste." },
      { productId: 15, productName: "Fig", productCategory: "Fruits", productPrice: "153", image: "https://media.istockphoto.com/id/1408844761/photo/fig-fruits-creative-layout.jpg?b=1&s=612x612&w=0&k=20&c=FRP6BRiy0Q4TYMrXH6tXXT2Gl7OJvYzb24hgnwBnxbc=",
      description: "Fig is a fruit that's worth the wait - its complex flavor is a reward for your patience." },
      { productId: 16, productName: "Gooseberry", productCategory: "Fruits", productPrice: "80", image: "https://media.istockphoto.com/id/92227086/photo/isolated-gooseberry-fruit-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=rDcEO0EEnDB7KKm8pi96kii_qicLYqmwdQYl0KBE-oM=",
      description: "Gooseberry is a fruit that's often overlooked, but once you try it, you'll wonder how you ever lived without it ." },
      { productId: 17, productName: "Mulberry", productCategory: "Fruits", productPrice: "95", image: "https://images.pexels.com/photos/105393/pexels-photo-105393.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Don't let the small size fool you - mulberries pack a big punch of flavor in every bite!" },
      { productId: 18, productName: "Pear", productCategory: "Fruits", productPrice: "50", image: "https://images.pexels.com/photos/7636163/pexels-photo-7636163.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "When life gets busy, a juicy, refreshing pear is the perfect pick-me-up to keep you going strong." },
      { productId: 19, productName: "Papaya", productCategory: "Fruits", productPrice: "45", image: "https://media.istockphoto.com/id/104638864/photo/halved-and-whole-papaya-fruits-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=nm1Jpstg4LYPq6nw_uGcb42rpjy9xEARez4qqs4LlL0=",
      description: "Add a little Papaya  to your life and you'll see how amazing it would be." },
      { productId: 20, productName: "pomegranate", productCategory: "Fruits", productPrice: "80", image: "https://images.pexels.com/photos/6956386/pexels-photo-6956386.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Eating a pomegranate is like unwrapping a gift from nature - each jewel-like seed a precious burst of flavor that's waiting to be savored." },
      { productId: 21, productName: "Cashew Fruit", productCategory: "Fruits", productPrice: "115", image: "https://images.pexels.com/photos/5767794/pexels-photo-5767794.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Cashew fruit may not be as well-known as some other fruits, but those who try it are in for a real treat" },
      { productId: 22, productName: "Redbanana", productCategory: "Fruits", productPrice: "65", image: "https://media.istockphoto.com/id/1337192480/photo/ripe-tropical-tasty-red-bananas.jpg?s=612x612&w=0&k=20&c=5ok51IedlljLtYAzsLK70zdkexDwUyQ4Q_XFHT1yz0I=",
      description: "With their creamy texture and sweet, fruity flavor, red bananas are the ultimate indulgence for fruit lovers everywhere." },
      { productId: 23, productName: "Star Fruit", productCategory: "Fruits", productPrice: "80", image: "https://images.pexels.com/photos/1334131/pexels-photo-1334131.jpeg?cs=srgb&dl=abundance-berries-close-up-1334131.jpg&fm=jpg&auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
      description: "A fruit that's sure to make your taste buds sing !" },
      { productId: 24, productName: "Ice Apple ", productCategory: "Fruits", productPrice: "40", image: "https://media.istockphoto.com/id/1257782854/photo/palmyra-fruit.jpg?b=1&s=612x612&w=0&k=20&c=9jd8Np9g72IjSBoME8ewZ2jKVQRh5y7WwNEnppN91dY=",
      description: "Cool down this summer with the refreshing taste of ice apple" },
      { productId: 25, productName: "Pael", productCategory: "Fruits", productPrice: "60", image: "https://media.istockphoto.com/id/1393967216/photo/wood-apple-or-beal-fruit-or-bell-over-on-white.jpg?b=1&s=612x612&w=0&k=20&c=cn25GxCXN82ArFJfzcQIcVnsiLP1z91U8Rs_xlL5PX0=",
      description: "Don't settle for boring fruits - try the exotic and delicious pael fruit" },
      { productId: 26, productName: "Amla", productCategory: "Fruits", productPrice: "50", image: "https://media.istockphoto.com/id/1414137216/photo/gooseberry-or-amla-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=yAuoaA1EokOsPFWLtBwqZKe1zJLlKUX58HCF0h0PCDU=",
      description: "Looking for a new and exciting fruit to try? Give amla a chance - you won't be disappointed!" },
      { productId: 27, productName: "Mulberry", productCategory: "Fruits", productPrice: "35", image: "https://media.istockphoto.com/id/182194161/photo/blackberry.jpg?b=1&s=612x612&w=0&k=20&c=bpTA8v83DT00MJ4Nc9EYJB_Kx1656nRKoVmzD4WzL3k=",
      description: "Get ready to fall in love with the sweet and juicy flavor of mulberrie" },
      { productId: 28, productName: "Pear", productCategory: "Fruits", productPrice: "65", image: "https://media.istockphoto.com/id/1299073137/photo/pears-isolated-one-and-a-half-green-pear-fruit-with-leaf-on-white-background-pear-slice-with.jpg?s=612x612&w=0&k=20&c=KwN77KxCAl025ZaSBgzO7aqM9DALlBcrX0TXUNF5kDs=",
      description: "If you're looking for a tasty and healthy fruit to add to your diet, pears are the perfect choice" },
      { productId: 29, productName: "Rose Apple", productCategory: "Fruits", productPrice: "70", image: "https://media.istockphoto.com/id/184640842/photo/thai-fruit-the-rose-apple-or-chomphu.jpg?s=612x612&w=0&k=20&c=Fhu21CHToOmZVvyRCKDKRhU0cynLHPhMxGGiI3tyuo0=",
      description: "Step out of your comfort zone and try something new with Rose Apples!" },
      { productId: 30, productName: "Avacado", productCategory: "Fruits", productPrice: "110", image: "https://media.istockphoto.com/id/94929126/photo/avocados-isolated-on-white.jpg?s=612x612&w=0&k=20&c=c0BSuWnUTAkZyj-cYHKzR5dXtZWQ1_3PXcea3M92Z4I=",
      description: "Experience the creamy, rich flavor of Avocado - a fruit that's as versatile as it is delicious" },
    ];
  }

}
