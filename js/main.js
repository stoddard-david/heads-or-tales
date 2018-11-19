//Global Variables
var htReaders = [new Reader()];;
var htCurrent = 0;

var you = document.getElementsByClassName('you');
var ai = document.getElementsByClassName('ai');

/*****************OBJECTS*****************/
//Reader Objects
function Reader() {
  this.name = '';
  this.page = 1;
  this.AI = 'Alfred';
}

/*****************FUNCTIONS*****************/
function loadReaders() {
  htReaders = JSON.parse(localStorage.htReaders);
}

function loadCurrent() {
  htCurrent = JSON.parse(localStorage.htCurrent);
}

function changeNames() {
  var i=0
  for (i=0; i<you.length; i++) {
    you[i].innerHTML = htReaders[htCurrent].name;
  }
  for (i=0; i<ai.length; i++) {
    ai[i].innerHTML = htReaders[htCurrent].AI;
  }
}
