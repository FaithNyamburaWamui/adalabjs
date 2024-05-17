const car = 
{model:"jaguar",make:"dg44"};

console.log(Object.keys(car));//used to find the keys
console.log(Object.values(car));//used to find the values
console.log(Object.entries(car));//used to combine key and value pair into an array with a property and their values
const properties = {color:"red"};
const newProperties = Object.assign(car,properties);
console.log(newProperties);//used to merge objects.
car.year=2023
console.log(car);
Object.freeze(car);//used to ensure that novalue is added or removed in the object.
car.drive = "ewwwleo";
console.log(car);
const newCar = Object.create(car);//it creates a new object will specifing its prototype.
console.log(newCar.model);
Object.defineProperty(newCar,"year",{value:2020,writable:false});//it is used to to add or modify the existing ones.
console.log(newCar.year);

const fruits = ["me","you","us"];
fruits.forEach(item=>console.log(item));

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."

//loops and checks for a max number

function maximum(){
    const numbers =[1,2,3,4,6,7,8,9,0,10,12,34,66];
    oddNumbers = [];
    evenNumbers = [];

    for(let i = 0;i<number.length;i++){
        if(number[i] %2==0){
            evenNumbers.push(numbers[i]);
        }
        else{
            oddNumbers.push(numbers[i]);
        }
    }
}


function checkIsVowel(word){
  let vowel = ['a','e','i','o','u'];
  let words = word.toLowerCase().split('');
  for(let i=0; i<vowel.length;i++){
    if(vowel.includes(words[i])){
      console.log(`${words[i]}. is a vowel`);}
      else{
        console.log(`${word[i]}. is a consonant`);
      }
  }
}
checkIsVowel('Faith');

function removeWhiteSpace(sentence){
  let newWord = sentence.split(' ').join('');
  console.log(newWord);
}
removeWhiteSpace('my  nationality  is  Kenyan');


function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(findLongestWord("My name is Wamui and l am a desginer"));

const details=[
  {name:"Faith",age:20,occupation:"Designer"},
  {name:"Joce",age:40,occupation:"Programmer"},
  {name:"Sarah",age:50,occupation:"Singer"},
  {name:"Phantom",age:47,occupation:"Programmer"},
  {name:"Agry",age:30,occupation:"Nurse"}
]
function isDetails(){
  let newDetail=details.filter(detail=>{detail.age>40 && detail.occupation==='programmer'});
  console.log(newDetail);
}
isDetails(details);




function isPrime(number){
  if(number<=1){
    console.log("Is not a prime number")
    return
  }
  else if(number===2){
    console.log("It is a prime number")
    return
  }
  else if(number%2===0){
    console.log("It is not a prime number")
    return
  }
  for(let i=3;i*i<=number;i++){
    if(number%i===0){
      console.log("Is not a prime number")
    }
  }
  console.log("Prime number")
}
console.log(isPrime(10));

function isFactorial(number){
  if(number<0){
    return 1
  }
  for(let i=2;i<number;i++){
    return 'Is factorial'
  }
}
console.log(isFactorial(4));