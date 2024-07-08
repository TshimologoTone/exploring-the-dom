const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
});

clearMessageButton.addEventListener('click', function() {
    myMessage.innerText = ''
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

for(let i=0;i<fruits.length;i++){
    const fruit = fruits[i];

   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}