const container =document.getElementById('container');
console.log('parent',container.parentElement);
console.log('nextsibling',container.nextElementSibling);
console.log('previoussibling',container.previousElementSibling);
console.log('children',container.children);
console.log('firstchild',container.firstElementChild);
console.log('lastchild',container.lastElementChild);

const html=document.documentElement;
console.log({html});
console.log('body',document.body);

//UPDATING DOM
const heading = document.getElementById('heading');
heading.innerHTML = 'Introduction to DOM Manipulation';
heading.style.color = 'red';

//CREATE DOM
const textChild = document.createElement('p');
container.appendChild(textChild);
textChild.innerHTML='This is the new child';
textChild.setAttribute("class",'container-new-child');
textChild.setAttribute("id","paragraph");

//DELETE DOM
heading.remove();

const button = document.getElementById('button');
button.style.border = 'none'
button.style.padding  = "10px 15px"
button.style.borderRadius = '5px'
button.style.cursor = "pointer"
button.style.backgroundColor ='#0096ff'
button.style.color = "#ffffff"

button.addEventListener('click' ,function(){
button.innerHTML='clicked'
button.style.backgroundColor = "#50c878"
});