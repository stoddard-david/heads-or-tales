/*****************VARIABLES*****************/
var htReaders = [new Reader()];;
var htCurrent = 0;
var verifyLoad = 0;

var you = document.getElementsByClassName('you');
var ai = document.getElementsByClassName('ai');

/*****************OBJECTS*****************/
//Reader Objects
function Reader() {
  this.name = '';
  this.page = 1;
  this.AI = 'Alfred';
  this.unlocks = [];
}

/*****************FUNCTIONS*****************/
function loadReaders() {
  htReaders = JSON.parse(localStorage.htReaders);
}

function loadCurrent() {
  htCurrent = JSON.parse(localStorage.htCurrent);
}

function saveLocalStorage() {
  localStorage.htReaders = JSON.stringify(htReaders);
  localStorage.htCurrent = JSON.stringify(htCurrent);
}

function changeNames() {
  var i=0
  changeClassContent(you, htReaders[htCurrent].name);
  changeClassContent(ai, htReaders[htCurrent].AI);
}

function changeClassContent(classArray, content) {
  for (i=0; i<classArray.length; i++) {
    classArray[i].innerHTML = content;
  }
}