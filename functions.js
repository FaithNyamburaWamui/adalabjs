function add (num1,num2){
    const sum = num1 + num2;
console.log({console:sum});
return{"sum":sum}
};
console.log(add(2,3));
add(4,5);

let student ="Agness";
function item (){
    const names = ["Anne","Eunice"];
    console.log({names});
    };
item();
console.log({outside:student});


//function expressions

const subtract = function (num1,num2){
    console.log(num1-num2);
};
subtract(20,10);

//Arrow function

const multiple = (num1,num2) => console.log(num1*num2);
multiple(6,9);

// Imeadiatly invoked function expression(IIFEs)

(function(){
    console.log("Hello there");
})();

//Hosting
console.log({person});
var person = "Human"
console.log("person 2...",person);
greet()

function greet(){
    console.log("Hi person");
}


const hello = () => console.log("This is a greeting");