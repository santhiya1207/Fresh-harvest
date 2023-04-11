import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  
  constructor() { }
  getProduct(): any[] {
    return [
      // Fruits
      { productId: 1, productName: "Apple",weight:"1 Kg", productCategory: "Fruits", productPrice: "50", image: "https://media.istockphoto.com/id/834816218/photo/red-apple-fruit-with-half-and-green-leaf-isolated-on-white.jpg?s=612x612&w=0&k=20&c=CAwW2uRYUNm5HyEN4iWTSx-2E9EyqFp-7VS2n7wFnIo=",
      description: "Apple can keeps your taste buds happy and satisfied." },
      { productId: 2, productName: "Lemons",weight:"1 Kg", productCategory: "Fruits", productPrice: "10", image: "https://media.istockphoto.com/id/92280727/photo/lemon.jpg?s=612x612&w=0&k=20&c=gXq0WQkkFkWBURFVY8_S80-7O1vQ8krIl4Sy1JRVQ2c=",
      description: "When life gives you Lemons, make Lemonade " },
      { productId: 3, productName: "Mangoes",weight:"1 Kg", productCategory: "Fruits", productPrice: "30", image: "https://media.istockphoto.com/id/168370138/photo/mango.jpg?s=612x612&w=0&k=20&c=ENq2BrUV8dNH2rth_ZYBBtS9RWDwCbI25SfulxirmnQ=",
      description: "Mangoes are a tropical paradise in your mouth with juicy sweetness" },
      { productId: 4, productName: "Strawberry",weight:"1 Kg", productCategory: "Fruits", productPrice: "90", image: "https://media.istockphoto.com/id/1313307173/photo/heap-of-fresh-picked-red-strawberries-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=f4SjszAVTQYlv1iktiYhB7kr_Wy6tgRzL5qBoNDEH2k=",
      description: "Strawberries are red. They're good for your blood." },
      { productId: 5, productName: "Watermelon",weight:"1 Kg", productCategory: "Fruits", productPrice: "85", image: "https://media.istockphoto.com/id/937363912/photo/whole-and-slices-watermelon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=jYBgMThOJ1nPe6QuJA9bp_IR9VgJy3quEUa5Y2l4imQ=",
      description: "Hot summer days ahead. It's time for a lot of watermelons." },
      { productId: 6, productName: "Guava",weight:"1 Kg", productCategory: "Fruits", productPrice: "60", image: "https://media.istockphoto.com/id/925682394/photo/guava-fruit-with-leaves-on-white-background.jpg?s=612x612&w=0&k=20&c=afBBJlgpiQtFJTSf-Y1iI9FoXnJiW0wnXDawEq7zyFI=",
      description: "There's nothing quite like the sweet, juicy flavor of a guava." },
      { productId: 7, productName: "Banana",weight:"1 Kg", productCategory: "Fruits", productPrice: "45", image: "https://media.istockphoto.com/id/636739634/photo/banana.jpg?s=612x612&w=0&k=20&c=pO0985tQi1LpWRlWqpRvbab8S5yxgnEOVcs5CHIlcDE=",
      description: "Eat banana in a break to get breakfree nutrients" },
      { productId: 8, productName: "Grapes ",weight:"1 Kg", productCategory: "Fruits", productPrice: "70", image: "https://media.istockphoto.com/id/1262665541/photo/fresh-of-blue-grapes-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=R9GG5aq4gEzwSEQ-NV8Px4jy3L9OjxITYeG7oeUdEYo=",
      description: "Grapes are nature's candy - a delicious and healthy treat" },
      { productId: 9, productName: "Plums",weight:"1 Kg", productCategory: "Fruits", productPrice: "125", image: "https://media.istockphoto.com/id/687478414/photo/red-cherry-plum-with-green-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vje7nFHGnWl-cHDA8wP_UZHryRT5LkAFwn7_8qKtiyc=",
      description: "A perfectly ripe plum is one of life's simple pleasures." },
      { productId: 10, productName: "Kiwi",weight:"1 Kg", productCategory: "Fruits", productPrice: "100", image: "https://media.istockphoto.com/id/503143534/photo/kiwi-fruit-on-white-background.jpg?s=612x612&w=0&k=20&c=-9hgNQCFAw0I_1FiE2dsbp0vfsnA6ZAIpuihdZjxhwY=",
      description: "Satisfy your sweet tooth and boost your health with delicious kiwi!" },
      { productId: 11, productName: "Pineapple",weight:"1 Kg", productCategory: "Fruits", productPrice: "90", image: "https://media.istockphoto.com/id/1064819674/photo/whole-with-slice-ripe-pineapple-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=I8BF1t5J7tVGGrWvZs8LQJLoxgIhIVWVY9KSMt8QR0M=",
      description: "Get your daily dose of vitamin C and fiber with pineapples!" },
      { productId: 12, productName: "Jackfruit",weight:"1 Kg", productCategory: "Fruits", productPrice: "230", image: "https://media.istockphoto.com/id/1369037190/photo/single-object-of-jackfruit-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=S2N6qfAskqOkAWsQdQknNTEB-zMwYPKbrCJXHsFFPx4=",
      description: "If you've never tasted jackfruit, you're missing out a fruit adventure!" },
      { productId: 13, productName: "Sapota",weight:"1 Kg", productCategory: "Fruits", productPrice: "86", image: "https://media.istockphoto.com/id/1467792506/photo/slice-of-sapodilla-chickoo-fruit-with-leaves-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=q-tf-BE738-V17Rz8l8HFdCse7qNLPQ4moylciWNPxA=",
      description: "Sapota is nature's dessert, packed with flavor in every bite." },
      { productId: 14, productName: "Dragonfruit ",weight:"1 Kg", productCategory: "Fruits", productPrice: "92", image: "https://media.istockphoto.com/id/1344251913/photo/pitaya-or-dragon-fruit.jpg?b=1&s=612x612&w=0&k=20&c=wJNRxL9gEOo2hP-f8YcGxIK6FlIOWv4E_WGKACLJUPY=",
      description: "Dragonfruit is both humble and luxurious, with its simple appearance" },
      { productId: 15, productName: "Fig",weight:"1 Kg", productCategory: "Fruits", productPrice: "153", image: "https://media.istockphoto.com/id/516650802/photo/fresh-figs.jpg?s=612x612&w=0&k=20&c=9nUhM4-JBCYmpWbNSugjonNGOCb5XjAQc9hs1kHwVMo=",
      description: "Fig is a fruit that's worth wait - its  flavor is a reward for patience." },
      { productId: 16, productName: "Gooseberry",weight:"1 Kg", productCategory: "Fruits", productPrice: "80", image: "https://media.istockphoto.com/id/92227086/photo/isolated-gooseberry-fruit-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=rDcEO0EEnDB7KKm8pi96kii_qicLYqmwdQYl0KBE-oM=",
      description: "Once you try this Gooseberry, you'll wonder how you missed it." },
      { productId: 17, productName: "Mulberry",weight:"1 Kg", productCategory: "Fruits", productPrice: "95", image: "https://media.istockphoto.com/id/1316486568/photo/ripe-and-delicious-black-mulberry-on-white-background.jpg?s=612x612&w=0&k=20&c=j5k1xfoXpqaOTlJl-2kfJBn6XYurRLxqsbkVIsbrBMA=",
      description: "Don't let the small size fool you - it's a pack of big punch flavor" },
      { productId: 18, productName: "Pear",weight:"1 Kg", productCategory: "Fruits", productPrice: "50", image: "https://media.istockphoto.com/id/1299073137/photo/pears-isolated-one-and-a-half-green-pear-fruit-with-leaf-on-white-background-pear-slice-with.jpg?s=612x612&w=0&k=20&c=KwN77KxCAl025ZaSBgzO7aqM9DALlBcrX0TXUNF5kDs=",
      description: "When life gets busy, a juicy, refreshing pear is the perfect pick-me-up" },
      { productId: 19, productName: "Papaya",weight:"1 Kg", productCategory: "Fruits", productPrice: "45", image: "https://media.istockphoto.com/id/104638864/photo/halved-and-whole-papaya-fruits-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=nm1Jpstg4LYPq6nw_uGcb42rpjy9xEARez4qqs4LlL0=",
      description: "Add a little Papaya  to your life and you'll see how amazing it would be." },
      { productId: 20, productName: "pomegranate",weight:"1 Kg", productCategory: "Fruits", productPrice: "80", image: "https://media.istockphoto.com/id/940118920/photo/ripe-pomegranate-fruit-and-one-cut-in-half-with-leaf.jpg?s=612x612&w=0&k=20&c=iVTrJvW6rtFTlsWk5J3v1r1NeCgNtZMD4qDJIh3sfik=",
      description: "Eating a pomegranate is like unwrapping a gift from nature" },
      { productId: 21, productName: "Cashew Fruit",weight:"1 Kg", productCategory: "Fruits", productPrice: "115", image: "https://media.istockphoto.com/id/167200993/photo/three-ripe-cashews-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=MslpRfaw3uGcFObhUlZcOCMxW0qk3wuLbHDxa5dlIYc=",
      description: "Cashew fruit - those who try it are in for a real treat" },
      { productId: 22, productName: "Redbanana",weight:"1 Kg", productCategory: "Fruits", productPrice: "65", image: "https://media.istockphoto.com/id/1353262545/photo/red-banana.jpg?s=612x612&w=0&k=20&c=3kc7hoJ6eGuDPyqnSWSKntUMSu7pWqZXKJ58KJ8MxpY=",
      description: "Red bananas are the ultimate indulgence for fruit lovers everywhere." },
      { productId: 23, productName: "Star Fruit",weight:"1 Kg", productCategory: "Fruits", productPrice: "80", image: "https://media.istockphoto.com/id/1310088680/photo/delicious-ripe-carambola-fruits-on-white-background.jpg?s=612x612&w=0&k=20&c=Mpoukz8XoV7Cg4x-r1Q5T9ThmOBtuLJuy7aJ0SnVg2c=",
      description: "A fruit that's sure to make your taste buds sing !" },
      { productId: 24, productName: "Ice Apple ",weight:"1 Kg", productCategory: "Fruits", productPrice: "40", image: "https://media.istockphoto.com/id/178135488/photo/tal-fruit-of-indian-subcontinent.jpg?s=612x612&w=0&k=20&c=dqhIfGjJppa4RtIYF5PB0oqwSqXdANwB_GTbBxfAPfw=",
      description: "Cool down this summer with the refreshing taste of ice apple" },
      { productId: 25, productName: "Pael",weight:"1 Kg", productCategory: "Fruits", productPrice: "60", image: "https://media.istockphoto.com/id/1393967216/photo/wood-apple-or-beal-fruit-or-bell-over-on-white.jpg?b=1&s=612x612&w=0&k=20&c=cn25GxCXN82ArFJfzcQIcVnsiLP1z91U8Rs_xlL5PX0=",
      description: "Don't settle for boring fruits - try the exotic and delicious pael fruit" },
      { productId: 26, productName: "Amla",weight:"1 Kg", productCategory: "Fruits", productPrice: "50", image: "https://media.istockphoto.com/id/1414137216/photo/gooseberry-or-amla-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=yAuoaA1EokOsPFWLtBwqZKe1zJLlKUX58HCF0h0PCDU=",
      description: "Looking for a new and exciting fruit to try? Give amla a chance" },
      { productId: 27, productName: "Mulberry",weight:"1 Kg", productCategory: "Fruits", productPrice: "35", image: "https://media.istockphoto.com/id/182194161/photo/blackberry.jpg?b=1&s=612x612&w=0&k=20&c=bpTA8v83DT00MJ4Nc9EYJB_Kx1656nRKoVmzD4WzL3k=",
      description: "Get ready to fall in love with the sweet & juicy flavor of mulberrie" },
      { productId: 28, productName: "Pear",weight:"1 Kg", productCategory: "Fruits", productPrice: "65", image: "https://media.istockphoto.com/id/1299073137/photo/pears-isolated-one-and-a-half-green-pear-fruit-with-leaf-on-white-background-pear-slice-with.jpg?s=612x612&w=0&k=20&c=KwN77KxCAl025ZaSBgzO7aqM9DALlBcrX0TXUNF5kDs=",
      description: "If you're looking for a tasty & healthy fruit to add to your diet, Here you go" },
      { productId: 29, productName: "Rose Apple",weight:"1 Kg", productCategory: "Fruits", productPrice: "70", image: "https://media.istockphoto.com/id/184640842/photo/thai-fruit-the-rose-apple-or-chomphu.jpg?s=612x612&w=0&k=20&c=Fhu21CHToOmZVvyRCKDKRhU0cynLHPhMxGGiI3tyuo0=",
      description: "Step out of your comfort zone and try something new with Rose Apples!" },
      { productId: 30, productName: "Avacado",weight:"1 Kg", productCategory: "Fruits", productPrice: "110", image: "https://media.istockphoto.com/id/94929126/photo/avocados-isolated-on-white.jpg?s=612x612&w=0&k=20&c=c0BSuWnUTAkZyj-cYHKzR5dXtZWQ1_3PXcea3M92Z4I=",
      description: "Avocado -fruit that's as versatile as it is delicious" },
      // Vegetables
      { productId: 31, productName: "Tomato",weight:"1 Kg", productCategory: "Vegetables", productPrice: "25", image: "https://media.istockphoto.com/id/831570242/photo/three-juicy-red-tomatoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bBrjZsWY4eg90OpA2S6cO3psGR1TFx8f4L0HAmIQqm4=",
      description: "The tomato offers its gift of fiery color and cool completeness." },
      { productId: 32, productName: "Onion",weight:"1 Kg", productCategory: "Vegetables", productPrice: "230", image: "https://media.istockphoto.com/id/1064819606/photo/whole-and-half-red-onion-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XEXSZUZTWQo8GjfF5p6m5nDCMS0X5VfJCNCBLjMqpNg=",
      description: "Onions are the spice of life." },
      { productId: 33, productName: "Potato", weight:"1 Kg",productCategory: "Vegetables", productPrice: "86", image: "https://media.istockphoto.com/id/466320023/photo/raw-potato.jpg?s=612x612&w=0&k=20&c=HNrIL0aXE9hgf3dpCU27D4o1ix4ADZJFJp8JViIQAiA=",
      description: "Healthy veggies, healthy planet" },
      { productId: 34, productName: "Turnip ",weight:"1 Kg", productCategory: "Vegetables", productPrice: "92", image: "https://media.istockphoto.com/id/177555654/photo/turnips.jpg?s=612x612&w=0&k=20&c=wtpLtJPZoM2oRL9m739PCmROoNPLTRJWV-Swj7loNBI=",
      description: "Veggies: the ultimate mood booster." },
      { productId: 35, productName: "Pumpkin",weight:"1 Kg", productCategory: "Vegetables", productPrice: "153", image: "https://images.pexels.com/photos/4110305/pexels-photo-4110305.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Eat more veggies, feel better." },
      { productId: 36, productName: "Garlic",weight:"1 Kg", productCategory: "Vegetables", productPrice: "80", image: "https://media.istockphoto.com/id/492507742/photo/selective-focus-of-garlic-on-white-background.jpg?s=612x612&w=0&k=20&c=Y32mQu1zniL0ZmVuXaBEsdi7CnvrO4CfIssRoFUJryI=",
      description: "It is like a secret weapon in the kitchen. It adds depth and flavor to dishes." },
      { productId: 37, productName: "Ginger",weight:"1 Kg", productCategory: "Vegetables", productPrice: "95", image: "https://media.istockphoto.com/id/647402780/photo/ginger-root-and-ginger-powder-in-the-bowl.jpg?s=612x612&w=0&k=20&c=0XZkhcBcCiHaJJLw4l0ECAAluslLV2MUDTYUR2IRYVA=",
      description: "Ginger can be a little miracle worker for your body. It can help ease nausea, reduce inflammation." },
      { productId: 38, productName: "Green chili",weight:"1 Kg", productCategory: "Vegetables", productPrice: "50", image: "https://media.istockphoto.com/id/1441605071/photo/fresh-green-chili-peppers-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=nCzBLao6Bjo54OAie5APkhw1aE8u1eO4t1S3VGBSOV8=",
      description: "Whether you're a fan of spicy food or not, green chili is worth giving a try." },
      { productId: 39, productName: "Beans",weight:"1 Kg", productCategory: "Vegetables", productPrice: "45", image: "https://media.istockphoto.com/id/504292793/photo/green-beans-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Jxm8nXv4-mncb10n5W_RNYDHIWu6U57ff7h74CHEsP0=",
      description: "For those who are looking for a way to add some plant-based protein to your diet" },
      { productId: 40, productName: "Radish",weight:"1 Kg", productCategory: "Vegetables", productPrice: "80", image: "https://media.istockphoto.com/id/97689679/photo/bunch-fresh-radish-with-cut.jpg?s=612x612&w=0&k=20&c=uLNpp_kemSGa14r72PzzytnmDB7zpqUZcvH9axxqHOE=",
      description: "Here is the little wake-up call for your taste buds" },
      { productId: 41, productName: "Lady finger",weight:"1 Kg", productCategory: "Vegetables", productPrice: "115", image: "https://images.pexels.com/photos/2583187/pexels-photo-2583187.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Little nutritional powerhouses to keep you healthy and strong" },
      { productId: 42, productName: "Peas",weight:"1 Kg", productCategory: "Vegetables", productPrice: "65", image: "https://images.pexels.com/photos/768092/pexels-photo-768092.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Want to add some color to your dishes, peas are a great choice." },
      { productId: 43, productName: "Broccoli",weight:"1 Kg", productCategory: "Vegetables", productPrice: "80", image: "https://media.istockphoto.com/id/1364035705/photo/fresh-broccoli-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=jK0GavE0YUJeZFRpQSUeo9-xGVmx-keF7QVbn4RqX5g=",
      description: "Little green tree, full of flavor and nutrition." },
      { productId: 44, productName: "Cauliflower ",weight:"1 Kg", productCategory: "Vegetables", productPrice: "40", image: "https://media.istockphoto.com/id/172868533/photo/a-cauliflower-with-foliage-isolated-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=ngFyHuMaHnBsJyD9VSHEkAjSFN1sTQFvVEJuevLLMHI=",
      description: "Blank slate for your cooking, ready to be transformed into  delicious dishes , here you go !" },
      { productId: 45, productName: "Carrot",weight:"1 Kg", productCategory: "Vegetables", productPrice: "60", image: "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=aN2rNiqJ5M58B1JyyrTqnRlundqAo3ObRwftBErRCLs=",
      description: "Carrot can be used in countless ways to add depth and richness to your dishes " },
      { productId: 46, productName: "Capsicum",weight:"1 Kg", productCategory: "Vegetables", productPrice: "50", image: "https://media.istockphoto.com/id/837203306/photo/green-bell-peppers.jpg?s=612x612&w=0&k=20&c=VIi8j7LcsG7YrJaFVJeFdLafUMiF2RwqiY7pwynuMy8=",
      description: "Are you looking for a way to add some crunch to your dishes, Here you go" },
      { productId: 47, productName: "Cabbage",weight:"1 Kg", productCategory: "Vegetables", productPrice: "35", image: "https://media.istockphoto.com/id/624925456/photo/green-cabbage-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=yuPEkyEG0pK0htYcUK8MiXTvhA7Ns5PwkJwIVmJjpjY=",
      description: "Cabbage is a powerful vegetable that can help a healthy immune system" },
      { productId: 48, productName: "Brinjal",weight:"1 Kg", productCategory: "Vegetables", productPrice: "65", image: "https://media.istockphoto.com/id/173879887/photo/eggplants-isolated.jpg?b=1&s=612x612&w=0&k=20&c=wOxMfG8zKnLUTsNxMrbJWo_O-NrSevXbve67AYgIwmc=",
      description: "People either love or hate it. But when it's cooked well, it's a true delight." },
      { productId: 49, productName: "Mushroom",weight:"1 Kg", productCategory: "Vegetables", productPrice: "70", image: "https://media.istockphoto.com/id/1125039190/photo/button-mushroom-field-mushroom.jpg?b=1&s=612x612&w=0&k=20&c=NmBAEkQkGXu4ANXl5UeF8g5kQo0AbFhuCY3pJdP5Uz0=",
      description: "Mushrooms are a great source of plant-based protein" },
      { productId: 50, productName: "Tamarind",weight:"1 Kg", productCategory: "Vegetables", productPrice: "110", image: "https://media.istockphoto.com/id/182798884/photo/fresh-tamarind-one-open-on-green-leaves-white-back.jpg?b=1&s=612x612&w=0&k=20&c=JCCWFJHmh-vjcsh5fSt7Jv6OOmdnvcSYJ2JVPgxD5vk=",
      description: "Describe the flavor is hard, if you taste it, you'll never forget it." },
      { productId: 51, productName: "Beetroot",weight:"1 Kg", productCategory: "Vegetables", productPrice: "115", image: "https://media.istockphoto.com/id/584890470/photo/fresh-beetroot-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=uyU8Ua6daUP4DDugjG7CP9zTkaohBh2Nue_7yfLHp0A=",
      description: "Beetroot is a great source of energy and helps to boost stamina" },
      { productId: 52, productName: "Coconut",weight:"1 Kg", productCategory: "Vegetables", productPrice: "65", image: "https://media.istockphoto.com/id/1158975559/photo/coco-coconut-half-and-piece-isolated-cocos-white-full-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=fPmCv_1fjDvanE4JTQMAewIR9QPLgTaPRL6X7Wotmo8=",
      description: "Red bananas are the ultimate indulgence for fruit lovers everywhere." },
      { productId: 53, productName: "Sweet Potato",weight:"1 Kg", productCategory: "Vegetables", productPrice: "80", image: "https://media.istockphoto.com/id/182897631/photo/fresh-red-sweet-potatoes.jpg?b=1&s=612x612&w=0&k=20&c=cRM6NlFDpogOB8lk5tAYVtQX0BFwp36BBRq9tXVRV_o=",
      description: "A fruit that's sure to make your taste buds sing !" },
      { productId: 54, productName: "Corn",weight:"1 Kg", productCategory: "Vegetables", productPrice: "40", image: "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Cool down this summer with the refreshing taste of Corn" },
      { productId: 55, productName: "Soya Bean",weight:"1 Kg", productCategory: "Vegetables", productPrice: "60", image: "https://media.istockphoto.com/id/1200355990/photo/dried-soybeans.jpg?b=1&s=612x612&w=0&k=20&c=bB1vUzZ2fem0m9TllpIWKVzbC8iYczo2AEnbSwNoTP8=",
      description: "Don't settle for boring Vegies - try the exotic and delicious Soya Bean" },
      // Dryfruits
      { productId: 56, productName: "Almonds",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "50", image: "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Nourish your body and soul with these wholesome treats." },
      { productId: 57, productName: "Cashews",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "35", image: "https://media.istockphoto.com/id/886151948/photo/cashew-nuts.jpg?s=612x612&w=0&k=20&c=3AMsK9JyZptAjySLzgFr_xTtSCysCjnP3884YPxQehI=",
      description: "Healthy snacking never tasted this good." },
      { productId: 58, productName: "Pistachios",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "65", image: "https://media.istockphoto.com/id/183758114/photo/pistachio-nuts.jpg?b=1&s=612x612&w=0&k=20&c=nQkwxnf97FUTf_c0yJPhUe9Vt6TM1uL60RoAegRBYu8=",
      description: "Nature's candy, now at your screen tap" },
      { productId: 59, productName: "Walnuts",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "70", image: "https://media.istockphoto.com/id/856854466/photo/walnuts-kernel-isolated-on-white-background-closeup.jpg?s=612x612&w=0&k=20&c=PpKroisyHBXmHkvlbSsHp9bjbjIoYRHwA5j5gmeP7f8=",
      description: "A handful of goodness in every bite.  " },
      { productId: 60, productName: "Peanuts",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "110", image: "https://media.istockphoto.com/id/1325739878/photo/roasted-peanuts-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=TdNfEtGMrM_cvK3NjJiQ7fmT98YG2goQRYrl9OheQs4=",
      description: "Fuel your day with the power of nuts and fruits." },
      { productId: 61, productName: "Dry Grapes",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "115", image: "https://media.istockphoto.com/id/1297800194/photo/dark-blue-raisins-on-a-plate-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=t8xh08jDHnTHHQVHBL5tkp2koY-wOPgSctC83yoHIFE=",
      description: "Good things come in small packages, like these dry fruits." },
      { productId: 62, productName: "Dates",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "65", image: "https://media.istockphoto.com/id/181077887/photo/dates.jpg?b=1&s=612x612&w=0&k=20&c=9pgq6x5DytwgWq54Qq21JmexPIQJYj1RLPNhRYoaHJc=",
      description: "For a snack that's as sweet as you are, try these dry fruits." },
      { productId: 63, productName: "Figs",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "80", image: "https://media.istockphoto.com/id/489153352/photo/figs.jpg?s=612x612&w=0&k=20&c=I9E28GcAAbxHaAuZpFPiVISTtMzmKntAQr8USCuoctY=",
      description: "Satisfy your cravings without sacrificing your health.!" },
      { productId: 64, productName: "Apricots",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "40", image: "https://images.pexels.com/photos/5425018/pexels-photo-5425018.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "A snack that's both delicious and nutritious" },
      { productId: 65, productName: "Prunes",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "60", image: "https://media.istockphoto.com/id/514570300/photo/raisins-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=zg0Ms_nxkvhS-4bAiRYOSDR3W-s2ObLEHK_aVAfp59Y=",
      description: "Snack smarter with these wholesome dry fruits." },
      { productId: 66, productName: "Pine Nuts",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "50", image: "https://media.istockphoto.com/id/1281133199/photo/pine-nut-heap-and-pine-cone-on-a-white-background-isolated.jpg?s=612x612&w=0&k=20&c=m3YeaF9Vd6ZsfI39-QcL_YZ0b16Z_bLa5mFHZWROqPE=",
      description: "The perfect snack to fuel your busy lifestyle" },
      { productId: 67, productName: "Cashews",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "35", image: "https://media.istockphoto.com/id/618068592/photo/cashews-with-wooden-bowl.jpg?s=612x612&w=0&k=20&c=gFemHszEZZBPJ_nMGciMzuccFDmwpBFBcjwn9EqrPz4=",
      description: "Healthy snacking has never been so satisfying." },
      { productId: 68, productName: "Pistachios",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "65", image: "https://media.istockphoto.com/id/489757188/photo/pistachio-in-closeup.jpg?s=612x612&w=0&k=20&c=31UrBiQf2idNdjmmyaFp70pU4-BtJ3W5uKMwlVo2Eaw=",
      description: "Experience the best of nature's bounty with these dry fruits." },
      { productId: 69, productName: "Lotus Seeds",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "70", image: "https://media.istockphoto.com/id/174331879/photo/lotus-seeds.jpg?s=612x612&w=0&k=20&c=LPNXnC8ir2OmxlRCrgPDMBgC0IfUNsDBx24LNtUQ64A=",
      description: "A snack that's naturally sweet, and full of goodness" },
      { productId: 70, productName: "Sesame Seeds",weight:"1 Kg", productCategory: "Dryfruits", productPrice: "110", image: "https://media.istockphoto.com/id/998223502/photo/peeled-sesame-seeds.jpg?s=612x612&w=0&k=20&c=rmu230mEQ_X6EWM4U_595CJGAlWjA-vD1mnbwvxKSgg=",
      description: "Healthy snacking never tasted this good." },
    //  Greens
      { productId: 71, productName: "Spinach",weight:"1 Kg", productCategory: "Greens", productPrice: "90", image: "https://media.istockphoto.com/id/1006196472/photo/bunch-of-spinach-leaves-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=OAIswtUC1aMNDwtMEFIaZv6fSIftsoAV-cgJZSGLJ7A=",
      description: "Greens for the win, always." },
      { productId: 72, productName: "Fenugreek leaves",weight:"1 Kg", productCategory: "Greens", productPrice: "230", image: "https://media.istockphoto.com/id/475039273/photo/methi-fenugreek-leaves.jpg?s=612x612&w=0&k=20&c=5fMgBzbj6UftzAaQ0YDZwuw-VWcRT7R3UiBWc9jRxSM=",
      description: "Eating greens, feeling good." },
      { productId: 73, productName: "Mustard greens",weight:"1 Kg", productCategory: "Greens", productPrice: "86", image: "https://media.istockphoto.com/id/983076214/photo/green-mustard-vegetable-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=qpGB1nKX7c4X5V2AmvBSrbxujX6GwbJYqYWZNqIAebo=",
      description: "Nourish yourself with leafy greens." },
      { productId: 74, productName: "Amaranth leaves ",weight:"1 Kg", productCategory: "Greens", productPrice: "92", image: "https://media.istockphoto.com/id/681795810/photo/amaranth-on-white-background.jpg?s=612x612&w=0&k=20&c=KD_vP9xyGrOG0OByoRnwUh4fuqVp-9-uyaoV0j3jezg=",
      description: "Get your greens for a natural energy boost." },
      { productId: 75, productName: "Dill leaves",weight:"1 Kg", productCategory: "Greens", productPrice: "153", image: "https://media.istockphoto.com/id/184860367/photo/dilll.jpg?s=612x612&w=0&k=20&c=nPbzzJ9CHCf82Y46GC5pGHJ6Pjg7lGshnZLecWiPaz4=",
      description: "Green up your life with leafy goodness." },
      { productId: 76, productName: "Drumstick leaves",weight:"1 Kg", productCategory: "Greens", productPrice: "80", image: "https://media.istockphoto.com/id/1298764238/photo/moringa%C2%A0oleifera-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=8ingD-3O7h9kaGolZGIPUd_d5fyym1g9a87amOJLBn8=",
      description: "Eating greens is an act of self-care." },
      { productId: 77, productName: "Basella ",weight:"1 Kg", productCategory: "Greens", productPrice: "95", image: "https://media.istockphoto.com/id/836415166/photo/basella-alba-malabar-spinach-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=0xEr2mkPWJhu2XKU76_W_LmuYTf0pniO230HAtqLoe0=",
      description: "Go green for a happy, healthy life!" },
      { productId: 78, productName: "Curry leaves",weight:"1 Kg", productCategory: "Greens", productPrice: "50", image: "https://media.istockphoto.com/id/1447300406/photo/curry-leaves-in-a-plate-on-white-background.jpg?s=612x612&w=0&k=20&c=FSVTu-t8h3PBR_v6AbVfLJc8h3liLMlMfKVLfH2C-j0=",
      description: "Eating greens is a smart investment in your health." },
      { productId: 79, productName: "Cilantro",weight:"1 Kg", productCategory: "Greens", productPrice: "45", image: "https://media.istockphoto.com/id/624698704/photo/parsley-bunch.jpg?s=612x612&w=0&k=20&c=KB-nSLNLPa8nSPNvVYM96N6X3WLSbz8EwFQfjCJnAlA=",
      description: "The freshness of green leaves is unbeatable" },
      { productId: 80, productName: "Mint",weight:"1 Kg", productCategory: "Greens", productPrice: "80", image: "https://media.istockphoto.com/id/935393534/photo/fresh-spearmint-leaves-isolated-on-the-white-background-mint-peppermint-close-up-n.jpg?s=612x612&w=0&k=20&c=rgohY4ULbFym_mu7YSSS5Xp78NGx9NbyL0_EFH7gQYA=",
      description: "Add green leaves to your plate for a boost of energy" },
      { productId: 81, productName: "Bottle gourd leaves",weight:"1 Kg", productCategory: "Greens", productPrice: "115", image: "https://media.istockphoto.com/id/1248137460/photo/ivy-gourd-on-white-background.jpg?s=612x612&w=0&k=20&c=lswz4YVpG_4FBI_ci0Df-xUi2YnCKjw46jADsZ0jPHI=",
      description: "The perfect way to add a touch of freshness to any dish" },
      { productId: 82, productName: "Pumpkin leaves ",weight:"1 Kg", productCategory: "Greens", productPrice: "65", image: "https://media.istockphoto.com/id/454395025/photo/yellow-pumpkins-vegetables-with-green-leaves-isolated.jpg?s=612x612&w=0&k=20&c=OX7BgZDObrIjagvQWPb13LZNBdHf5udL_qfUgWxTMWE=",
      description: "Eating leaves is like a celebration of nature's bounty" },
      { productId: 83, productName: "Radish greens ",weight:"1 Kg", productCategory: "Greens", productPrice: "80", image: "https://media.istockphoto.com/id/174760596/photo/fresh-red-radish.jpg?s=612x612&w=0&k=20&c=t2tjBTknMGsTpUVEd3NXxC4PplucvIMM7kF9YRhkLyE=",
      description: "Eating green leaves is like feeding your body sunshine.!" },
      { productId: 84, productName: "Banana leaves",weight:"1 Kg", productCategory: "Greens", productPrice: "40", image: "https://media.istockphoto.com/id/1130110212/photo/fresh-whole-banana-leaf.jpg?s=612x612&w=0&k=20&c=GveJB2MIRq13LW-L6Q044BW1EtzDKKYxVelJGrukzwM=",
      description: "The chlorophyll in green leaves helps detoxify and cleanse the body" },
      { productId: 85, productName: "Onion leaves",weight:"1 Kg", productCategory: "Greens", productPrice: "60", image: "https://media.istockphoto.com/id/1393967216/photo/wood-apple-or-beal-fruit-or-bell-over-on-white.jpg?b=1&s=612x612&w=0&k=20&c=cn25GxCXN82ArFJfzcQIcVnsiLP1z91U8Rs_xlL5PX0=",
      description: "Eating greens is the green signal for a healthy body." } 
    ];
  }

}
