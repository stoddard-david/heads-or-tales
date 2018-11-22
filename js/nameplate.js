/*****************VARIABLES*****************/
var readerNames = document.getElementById('readerNames');
var addReader = document.getElementById('addReader');
var newReader = document.getElementById('newReader');

/*****************FUNCTIONS*****************/
function addNewReader() {
  if (trim(newReader.value!="")) {
    htCurrent = htReaders.length;
    htReaders[htCurrent] = new Reader();

    htReaders[htCurrent].name = newReader.value;
    newReader.value = ""

    var createOption = document.createElement('option');
    createOption.id = 'name' + htCurrent;
    createOption.value = htCurrent;

    var textnode = document.createTextNode(htReaders[htCurrent].name); //Creates text to go in the new element
    createOption.appendChild(textnode); //Places the element inside an element, as last child

    readerNames.appendChild(createOption); 
    readerNames.value = htCurrent;

    localStorage.htReaders = JSON.stringify(htReaders);
    localStorage.htCurrent = JSON.stringify(htCurrent);
  }
}

function populateNames() {
  for (i = 1; i<htReaders.length; i++) {
    var createOption = document.createElement('option');
    createOption.id = 'name' + i;
    createOption.value = i;
      
    var textnode = document.createTextNode(htReaders[i].name); //Creates text to go in the new element
    createOption.appendChild(textnode); //Places the element inside an element, as last child

    readerNames.appendChild(createOption);
  }
}

function changeReader() {
  htCurrent = readerNames.value;
  localStorage.htCurrent = JSON.stringify(htCurrent);
}

/*****************EVENTS*****************/
addReader.addEventListener('click', addNewReader);
readerNames.addEventListener('change', changeReader);

/*****************ON PAGE LOAD*****************/
window.onload = function () {
  if (localStorage.htReaders !== null && localStorage.htReaders !== undefined) {
    loadReaders();
    populateNames();
  }

  if (localStorage.htCurrent !== null && localStorage.htCurrent !== undefined) {
    loadCurrent();
    readerNames.value = htCurrent;
  }
}