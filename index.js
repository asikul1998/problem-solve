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

const phones = [
    {name:'Samsung', camara:'12', storage:'32gb', price: 36000, color:'silver'},
    {name:'Walton', camara:'10', storage:'32gb', price: 30000, color:'silver'},
    {name:'i-phone', camara:'10', storage:'34gb', price: 82000, color:'silver'},
    {name:'Xaomi', camara:'10', storage:'34gb', price: 52000, color:'silver'},
    {name:'Oppo', camara:'10', storage:'34gb', price: 20000, color:'silver'},
    {name:'Nokia', camara:'10', storage:'34gb', price: 44000, color:'silver'},
    {name:'HTC', camara:'10', storage:'34gb', price: 62000, color:'silver'},
];

function cheapeastPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
       const phone = phones[i];
       if(phone.price < cheapeast.price){
        cheapest = phone;
       }
      
    }
    return cheapest;
}
const mySelection = cheapeastPhone(phones);
console.log(mySelection);
