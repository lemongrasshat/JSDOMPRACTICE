// console.dir(document)
// console.log(document.head)
//document body
// console.log(document.body)

// console.log(document.head)

//document all 
// console.log(document.all)

//document body
// console.log(document.head)
// DOM is basically object list  you can get it by selector

// you can get list of all elements such as
// document.forms
// document.images
// document.links etc etc


//+++++++ GET ELEMENT BY ID
let headex=document.getElementById("myheader").innerHTML;
console.log(headex);
// item.innerText vs item.textContent
// Difference is that textcontent doesnt respect css
// such as even if elem is hidden by dispaly : none
// still textContent would show the hidden part
// example https://youtu.be/0ik6X4DJKCc?t=1231
//document.innerHtml = 'NEW HEADER'


// DOCUMENT.all() getElementsByClassName return HTML COLLECTION
// rather nodelist so you cannot apply array functions to it but you still can access 
//it using array index or normal loops 
// +++++++ GET ELEMENT BY CLASS
let myVar=document.getElementsByClassName('btn');
console.log(myVar)

// YOu can also modify CSS of  select element

// BUt be careful you cannot use direct property you have to use camelcase
// such as border-bottom becomes borderBottom 
// etc etc
//myVar[0].style.borderBottom= 'solid 3px #000'
// if you want to give all them of styles
// you would use for loop since myVar is HTML COLLECITON
// so you cannot do myVar.style.borderBottom =... will nto work


// +++++++GET ELEMENT BY TAG NAME 
let AllList=document.getElementsByTagName('li');
console.log(AllList);
// you can apply to all tag items

// 


// QUERRY SELECTOR