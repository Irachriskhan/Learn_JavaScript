// // GetElementById()
// console.log("//// GetElementById")
// hello = document.getElementById('main-heading');
// console.log(hello);
// // GetElementByClassName()
// console.log("////// GetElementByClassName")
// listItem = document.getElementsByClassName('list-items');
// console.log(listItem);
// // GetElementsByTagName()
// console.log("////// GetElementsByTagName")
// listNewItem = document.getElementsByTagName('li');
// console.log(listNewItem);
// // querySelector()
// console.log("/////// querySelector")
// container = document.querySelector('div');
// console.log(container);
// // querySelectorAll
// console.log("//////////// querySelectorAll")
// allContainer = document.querySelectorAll('div');
// console.log(allContainer);

// // DOM Manipulation
// heading1 = document.querySelector('#main-heading');
// heading1.style.color = '#fff';

// listItems = document.querySelectorAll('.list-items');
// for(i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = "2.5rem";
// }

// CREATE and ADD elements
ul = document.querySelector('ul');
li = document.createElement('li');
ul.append(li); // ADD elements

// MODIFY the TEXT

// firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
li.innerText = "X-men";

// MODIFY ELEMENTS and ATTRIBUTES
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');
// title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// MODIFY CLASSES and ATTRIBUTES

li.classList.add('list-items');
li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));