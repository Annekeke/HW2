const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable = [1,'Bob','Steve',10];

/*
Everything in between is a comment.
*/

// This is a comment

6 + 9;
'Hello ' + 'world!';

9 - 3;
8 * 2; // multiply in JS is an asterisk
9 / 3;

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}

alert('hello!');

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myHTML = document.querySelector('html');
myHTML.onclick = function() {};

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

// Personalized welcome message code

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  