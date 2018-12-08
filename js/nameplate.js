/*****************VARIABLES*****************/
var readerNames = document.getElementById('readerNames');
var addReader = document.getElementById('addReader');
var newReader = document.getElementById('newReader');
var continueReading = document.getElementById('continueReading');

/*****************FUNCTIONS*****************/
function addNewReader() {
  if (newReader.value.trim()!="") {
    htCurrent = htReaders.length;
    htReaders[htCurrent] = new Reader();

    htReaders[htCurrent].name = newReader.value.trim();
    newReader.value = ""

    addSelectionOptions(htCurrent);  
    readerNames.value = htCurrent;
    saveLocalStorage();
    hideBookmark();
  }
}

function populateNames() {
  for (i = 1; i<htReaders.length; i++) {
    addSelectionOptions(i)
  }
}

function addSelectionOptions(optionIndex) {
    var createOption = document.createElement('option');
    createOption.id = 'name' + optionIndex;
    createOption.value = optionIndex;
      
    var textnode = document.createTextNode(htReaders[optionIndex].name);
    createOption.appendChild(textnode);

    readerNames.appendChild(createOption);
}

function changeReader() {
  htCurrent = readerNames.value;
  saveLocalStorage();
  if (htReaders[htCurrent].bookmark != 0) {
    viewBookmark();
  } else {
    hideBookmark();
  }
}

function viewBookmark() {
  continueReading.href = 'pages/page' + htReaders[htCurrent].bookmark + '.html';
  continueReading.innerHTML = 'Continue Reading on Page ' + htReaders[htCurrent].bookmark;
  continueReading.classList.remove('hidden');
}

function hideBookmark() {
  continueReading.classList.add('hidden');
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
  
  if (htCurrent != 0 && htReaders[htCurrent].bookmark != 0) {
    viewBookmark();
  }
}