var Variabel1 = "David";
var Variabel2 = 10;
var Variabel3 = true;

//auch dies ist ein Kommentar
// === = Gleichheitsoperator
// ! , !== = Prüfung auf Ungleichheit

var eis = 'Schokolade';
if (eis === 'Schokolade') { //wenn Eis Schokolade ist
  alert('Yuhu, ich liebe Schokoladeneis!'); //dann
} else { //ansonsten
  alert('Awwww, ich mag lieber ein Schokoladeneis...');
}


function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

multiply(4,7);
multiply(20,20);
multiply(0.5,3);


document.querySelector('html').onclick = function() {
    alert('Hey! Nicht so viel klicken!');
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kaffeebilder/kaffee 1.jpg') {
      myImage.setAttribute ('src','images/tee1.jpg');
    } else {
      myImage.setAttribute ('src','images/kaffeebilder/kaffee 1.jpg');
    }
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Zum Glück bist du da, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Zum Glück bist du da, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }