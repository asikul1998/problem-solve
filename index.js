// Remove an element in a array duplicate value

// const names = [ 'abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul', ];

// function remoteDuplicate(names){
//     const unique = [];
//     for(let i = 0; i < names.length; i++){
//         const  name = names[i];
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique
// }
// const uniqeName = remoteDuplicate(names);
// console.log(uniqeName);

// problem - 2

// function output(){
//     for(let i = 1; i < 50; i++){
//         if((i % 3 === 0) && (i % 5 === 0)){
//             console.log("foobar");
//         }
//         else if(i % 3 === 0){
//             console.log("foo");
//         }
//         else if(i % 5 === 0){
//             console.log("bar");
//         }
//         else{
//          console.log(i);
//         }
//     }
    
// }
// output()

// problem - 3

// function woodcalculator(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;
//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = bedQuantity * perBedWood;
//     console.log(chairQuantity, tableQuantity, bedQuantity);
//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }


// const totalWood = woodcalculator(2, 2, 5);
// console.log(totalWood);

// problem - 4


// const phones = [
//   { name: 'Samsung', camara: '12', storage: '32gb', price: 36000, color: 'silver' },
//   { name: 'Walton', camara: '10', storage: '32gb', price: 30000, color: 'silver' },
//   { name: 'i-phone', camara: '10', storage: '34gb', price: 82000, color: 'silver' },
//   { name: 'Xaomi', camara: '10', storage: '34gb', price: 52000, color: 'Black' },
//   { name: 'Oppo', camara: '10', storage: '34gb', price: 20000, color: 'Golden' },
//   { name: 'Nokia', camara: '10', storage: '34gb', price: 44000, color: 'Grinich ash' },
//   { name: 'HTC', camara: '10', storage: '34gb', price: 62000, color: 'silver' },
// ];

// function cheapeastPhone(phones) {
//   let cheapest = phones[0];
//   for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     if (phone.price < cheapest.price) {
//       cheapest = phone;
//     }

//   }
//   return cheapest;
// }
// const mySelection = cheapeastPhone(phones);
// console.log(mySelection)

// problem -5


// const shoppingCart = [
//     {name: 'shoe', price: 1200},
//     {name: 'shirt', price: 2200},
//     {name: 'pant', price: 3700},
//     {name: 'belt', price: 600},
// ];

// function totalCost (products){
//     let sum = 0;
//     for(let i = 0; i < products.length; i++){
//         const product = products[i];
//         sum = sum + product.price;
    
//     }
//     return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log(expense);

// problem - 6 discoun product

// function ticketPrice (ticketQuantity) {
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const rest100Rate = 70;
//     if(ticketQuantity <= 100){
//         const price = ticketQuantity * first100Rate ;
//         return price
//     }
//     else if(ticketQuantity <= 200){
//         const first100Price = 100 * first100Rate ;
//         const restTicketQuantity = ticketQuantity -100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100Price + restTicketPrice;
//         return totalPrice;
//     }
//     else{
//         const first100Price = 100 * first100Price ;
//         const second100Price = 100 * second100Rate;
//         const restTicketQuantity = ticketQuantity  - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalCost = first100Price + second100Price + restTicketPrice;
//         return ticketPrice
//     }

// }

// const price = ticketPrice(20);
// console.log(price);

// এমন একটি ফাংশন লিখতে হবে যে ফাংশনটি দুইটি সংখ্যার যোগফল বের করতে পারে  ।। ফাংশনটি আউটপুট হিসাবে NAN দিবে 

// let a = 5;
// let b = 10;
// function adder(num1, num2){
//     return num1 + num2 ;
// }
// let sum = adder(5 + 10)
// console.log(sum);
// // problem-1
function radianToDegree(radian){
    if(typeof radian != "number"){
        return "sorry invalid input"
       
    }
    else{
    let pi = Math.PI;
    let oneRadian = 180 / pi;
    let degree = oneRadian * radian;
    let ans = degree.toFixed(2);
    return ans;
    }
}
let result = radianToDegree("10");
console.log(result);

// // problem - 2

function isJavaScriptFile(fileName) { 

  if(fileName[fileName.length - 1] === "s" && fileName[fileName.length - 2] === "j" && fileName[fileName.length - 3] === "."){
    return true;
  }
  else{
    return false;
  }
} 

const  isJavaScriptFileResult = isJavaScriptFile("js. png");
console.log(isJavaScriptFileResult);

// problem - 3

function oilPrice(diselOfNum, pettrolOfNum, octaneOfNum){
  
  if(typeof diselOfNum != "number"){
    return "sorry invalid input";
  }
  else if(typeof pettrolOfNum != "number"){
    console.log ("sorry invalid input");
  }
  else{
    console.log ("sorry invalid input");
  }
  let disel = 114;
  let pettrol = 130;
  let octane = 135;
  let diselTotal = diselOfNum * disel;
  let pettrolTotal = pettrolOfNum * pettrol;
  let octaneTotal = octaneOfNum * octane;
  const sum = diselTotal + pettrolTotal + octaneTotal;
  return sum;
}
let result1 = oilPrice( "30", 20, 10);
console.log(result1);


// problem -4
function publicBusFare(people) {
   if(typeof people != "number"){
      return "invalid input"
   }
  let  publicBusTicketPrice = 250;
  let  eachBusPeople = 50;
  let  eachMicrobusPeople = 11;
  let  remainMicrobusPeople = people % eachBusPeople;
  let  remainPublicBusPeople = remainMicrobusPeople % eachMicrobusPeople;
  const publicBusPeopleTicketPrice = remainPublicBusPeople * publicBusTicketPrice;

  return publicBusPeopleTicketPrice;
}

const totalPublicBusFare = publicBusFare("55");
console.log(totalPublicBusFare);

// problem- 5

function isBestFriend(objectm01, objectm02){
  if(typeof object01 != object){
    return "please enter an object "
  }

 let tomName = objectm01.name;
  let tomFriend = objectm02.friend;
  let rokyName = objectm01.friend;
  let rokyFriend = objectm02.name;

  if(tomName === tomFriend && rokyName === rokyFriend){

    return true;
  }
  else{
    return false;
  }
}

const  object01 = {name: "Tom", friend: "Rock" };
const  object02 = {name:"Rock", friend:"Tom"};

let result2 = isBestFriend(object01, object02);

console.log(result2);




