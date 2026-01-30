const student ={
    fullName:"prabesh aryal",
    age:21,
    gpa:3.5,
    isPass:true,

};
console.log(student);
const product = {
    fullName: "Pen",
    rating: 4,
    price: 270,
    offer: 5,
}
console.log(product);
 
const profile ={
    fullName : "Prabesh Aryal",
    posts : 195,
    followers : 123,
    following : 321,
    isfollow : false,

};
console.log(profile);

// object is a data structure which is used to store key-value pair;
//training

let new_object = {};
let new_object2 = new Object;

new_object.name = "ramu";
new_object.age = 18;
new_object.salary = 123.45;


console.log(new_object);

let person = {
    firstname : "prabesh",
    lastname : "aryal",
    age: 22,

}

//object methhods: entries - returns array of key-value pair in an object
let text = Object.entries(person);
console.log(text);

//key - return key of an object
let key = Object.keys(person);
console.log(key)

//values - return values of an object
let values = Object.values(person);
console.log(values);




