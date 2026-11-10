// singleton
// object.Create

// object literals

// const mysym=Symbol("key1")

// const jsuser={
//     name:"Shrikant",
//     [mysym]:"mykey1",
//     age:20,
//     location:"Beng",
//     isLoggeduin:false,
// }
// console.log(jsuser.name)
// console.log(jsuser.age)
// console.log(jsuser[mysym])
// jsuser.name="Shri"
// console.log(jsuser.name)

// jsuser.greetings=function(){
//     console.log("Hello js user");
// }
// jsuser.greetingsTwo=function(){
//     console.log(`Hello js user,${this.name}`);
// }
// console.log(jsuser.greetings());
// console.log(jsuser.greetingsTwo());

const product={
    name:"Laptop",
    price:55000,
    brand:"Dell",
    specifications:{
        ram:"16GB",
        storage:"512GB"
    }
};

console.log(product.name);
product.price=60000
product.color="Black"
console.log(product.specifications.ram)
const {name,price,brand}=product;
console.log(name);
console.log(brand);
console.log(price);

// Array of Obects
// const events=[
//     {
//         id:1,
//         name:"hackathon",
//         price:100
//     },
//     {
//         id:2,
//         name:"COding contest",
//         price:50
//     },
//     {
//         id:3,
//         name:"Robotics",
//         price:150
//     }
// ];

// console.log(events[0])
// console.log(events[1].price)
// events.forEach(element => {
//     console.log(element.name);
// });

// const result=events.find(event=>event.id==2);
// console.log(result)


// objects methods

// const userr={
//     name:"shrikant",
//     greet:function(){
//         console.log("Helo");
//     }
// };
// userr.greet();

// const user={
//     name:"shrikant",
//     greet(){
//         console.log("Hello");
//     }
// };
// user.greet();

// const student={
//     name:"shriant",
//     age:20,
//     branch:"CSE"
// };
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student))