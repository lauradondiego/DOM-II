// Your code goes here
const myInput1 = 
document.querySelector('p');
myInput1.addEventListener('click', (event) => {
  myInput1.style.fontFamily = "Snell Roundhand, cursive";
});

const myInput2 = 
document.querySelector('h1.logo-heading');
myInput2.addEventListener('dblclick', (event) => {
  myInput2.style.backgroundColor = "purple";
});

const myInput3 = 
document.querySelector('h2');
window.addEventListener('resize', (event) => {
  myInput3.style.fontSize = "12px";
  console.log(myInput3);
});


const myInput4 =
document.querySelector("img");
window.addEventListener('scroll', (event) => {
  myInput4.style.border = "20px dotted pink";
  console.log(myInput4);
});

const myInput5 =
document.querySelector(".text-content");
console.log(myInput5);
window.addEventListener('mousemove', (event) => {
  myInput5.style.color = "green";
});

const myInput6 =
document.querySelector(".text-content");
console.log(myInput6);
window.addEventListener('mouseout', (event) => {
  myInput6.style.color = "red";
});

const myInput7 =
document.querySelector(".btn");
console.log(myInput7);
window.addEventListener('dragstart', (event) => {
  myInput7.style.backgroundColor = "black";
});

const myInput8 =
document.querySelector(".footer");
console.log(myInput8);
window.addEventListener('copy', (event) => {
  myInput8.style.border = "20px solid blue";
});

const myInput9 =
document.querySelector("nav");
console.log(myInput9);
window.addEventListener('keypress', (event) => {
  myInput9.style.border = "20px solid green";
}); 

const myInput10 =
document.querySelector(".content-pick h4");
console.log(myInput10);
window.addEventListener('keyup', (event) => {
  myInput10.style.color = "yellow";
}); 

//  stop prop code
let button = document.querySelector('.btn');
let div = document.querySelector('div');
button.addEventListener('click', event => {
  console.log("button was clicked");
})
div.addEventListener('click', event => {
  event.stopPropogation();
  console.log('div was clicked');
})

