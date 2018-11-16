//Global Variables
var htReaders = [new Reader()];;
var htCurrent;

var readerNames = document.getElementById('readerNames');
var addReader = document.getElementById('addReader');
var newReader = document.getElementById('newReader');

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

function addNewStyle() {
  htCurrent = htReaders.length;
  htReaders[htCurrent] = new Reader();

  htReaders[htCurrent].name = newReader.value;
  
  var createOption = document.createElement('option');
  createOption.id = 'name' + htCurrent;
  createOption.value = htCurrent;

  var textnode = document.createTextNode(htReaders[htCurrent].name); //Creates text to go in the new element
  createOption.appendChild(textnode); //Places the element inside an element, as last child

  readerNames.appendChild(createOption); 
  readerNames.value = htCurrent;
}

/*****************EVENTS*****************/
addReader.addEventListener('click', addReaderStyle);

  /*****************ON PAGE LOAD*****************/
window.onload = function () {
  if (localStorage.getItem('htReader') != null) {
    loadReaders();
  }

  if (localStorage.getItem('htCurrent') != null) {
    loadCurrent();
  }
}
