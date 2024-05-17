let fruits = ["Mangoes", "Banana","Orange"];

let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

fruits[1] = 2;
console.log({fruits});

console.log("last item", fruits.slice(-1));
// console.log("several items", fruits.slice(2,3));

let addlast = fruits.push("apple");
console.log({fruits});

let addStart = fruits.unshift("Pineaple");
console.log({fruits});

let removeLast = fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});

let newFruits = fruits.push(['Tomato','Pear']);
console.log({fruits});

let items = [20,30,40,50,60];
let add = items.reduce((acc,cur)=> acc+ cur);//used for adding
console.log({add});

let multply = items.map(item=> item * 2);//for multipling each item of array by 2
console.log({multply});

// let square = items.forEach(item=> item * item);
// console.log({square})

let square = []
let total = 0;
items.forEach(item=>{
    const multiple = item*item;
    console.log(multiple);
    square.push(multiple);
    total += item
})
console.log({square});
console.log({total});

//Destructuring

let [num1, num2, num3, ...rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest})