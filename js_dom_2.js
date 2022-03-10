

// TRAVERSING THE DOM
// parentnode

let LastQuery=document.querySelector('#main-list');
console.log(LastQuery.childNodes);
//DISPLAYS ALL CHILD NODES also adds newline in the nodescollections
// SO USE children but it is HTML COLLECTION NOT NODELIST
// SO BE CAREFUL

console.log(LastQuery.children)

//USES HTML COLLECTION SO NO NEWLINE SHENANIGANS

console.log(LastQuery.firstElementChild)
console.log(LastQuery.lastElementChild)

//BELOW COULD DISPLAY newlines as it uses childNodes
console.log(LastQuery.firstChild)
console.log(LastQuery.lastChild)

console.log(LastQuery.previousElementSibling)
// ABOVE DISPLAYS NULL BECAUSE #main list doesnt have sibling
console.log(LastQuery.nextElementSibling)
//ABOVE DISPLAY NEXT ELEMENT SIBLING
