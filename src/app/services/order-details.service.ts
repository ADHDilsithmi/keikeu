import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Battenberg Cake",
      foodDetails:"A light sponge cake held together with jam. Mostly has two-by-two check pattern inside!",
      foodPrice:300,
      foodImg: "../../assets/img/Battenberg.jpg"
    },
    {
      id:2,
      foodName:"Black Forest Cake",
      foodDetails:"Originated in Germany and usually made using chocolate, whipped cream, and cherries.",
      foodPrice:1000,
      foodImg: "../../assets/img/black-forest.jpg"
    },
    {
      id:3,
      foodName:"Bundt Cake",
      foodDetails:"Inspired by a traditional European cake known as Gugelhupf.",
      foodPrice:600,
      foodImg: "../../assets/img/bundt.jpg"
    },
    {
      id:4,
      foodName:"Brownie Cake",
      foodDetails:"A bigger version of chocolate brownies. It contains nuts and chocolate chips.",
      foodPrice:350,
      foodImg: "../../assets/img/brownie.jpg"
    },
    {
      id:5,
      foodName:"Charlotte Cake",
      foodDetails:"A type of dessert or trifle that can be served hot or cold. It looks like covering a cake with long snacks.",
      foodPrice:1200,
      foodImg: "../../assets/img/Charlotte.jpg"
    },
    {
      id:6,
      foodName:"Carrot Cake",
      foodDetails:"Not hard to guess that it surely has carrots in it.",
      foodPrice:1300,
      foodImg: "../../assets/img/carrot.jpg"
    },
    {
      id:7,
      foodName:"Genoa Cake",
      foodDetails:"A yeasty cake consisting of sultanas, currants or raisins, glacé cherries, almonds, and candied orange peel or essence, cooked in a batter of flour, eggs, butter and sugar.",
      foodPrice:350,
      foodImg: "../../assets/img/genoa.jpg"
    },
    {
      id:8,
      foodName:"Red Velvet Cake",
      foodDetails:"Beetroot juice and cocoa powder are the main ingredients of Red velvet cake.Quite an appealing delicacy to celebrate any occasion.",
      foodPrice:1750,
      foodImg: "../../assets/img/red-velvet.jpg"
    },
    {
      id:9,
      foodName:"Lemon Cake",
      foodDetails:"The sourness of lemon blended with the yum of whipped cream and sweetness of the Cake – Lemon Cake is a much devouring cake that can serve health benefits as well.",
      foodPrice:1400,
      foodImg: "../../assets/img/lemon.jpg"
    },
    {
      id:10,
      foodName:"King Cake",
      foodDetails:"The King cake is associated with the festival of Epiphany after Christmas in many countries. Also famous for its glittering toppings!",
      foodPrice:1100,
      foodImg: "../../assets/img/king-cake.jpg"
    },
    {
      id:11,
      foodName:"Ice Cream Cake",
      foodDetails:"Layering cake bread with ice creams instead of whipped cream and topped with ice cream too!",
      foodPrice:400,
      foodImg: "../../assets/img/ice-cream.jpg"
    },
    {
      id:12,
      foodName:"Coffee Cake",
      foodDetails:"For the lovers of coffee and Cake! Originated in Germany, coffee cakes are refreshing and delicious.",
      foodPrice:375,
      foodImg: "../../assets/img/Coffee.jpg"
    }
  ]


  

}
