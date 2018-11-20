/*****************VARIABLES*****************/
var aiName = document.getElementById('aiName');

/*****************FUNCTIONS*****************/
function changeAI() {
  htReaders[htCurrent].AI = aiName.value;
  
  if (verifyLoad==2) {
    for (i=0; i<ai.length; i++) {
      ai[i].innerHTML = htReaders[htCurrent].AI;
    }
    localStorage.htReaders = JSON.stringify(htReaders);
  }
}

/*****************EVENTS*****************/
aiName.addEventListener('change', changeAI);

/*****************ON PAGE LOAD*****************/
window.onload = function () {
  if (localStorage.htReaders !== null && localStorage.htReaders !== undefined) {
    loadReaders();
    verifyLoad++;
  }

  if (localStorage.htCurrent !== null && localStorage.htCurrent !== undefined) {
    loadCurrent();
    verifyLoad++;
  }
  
  if (verifyLoad==2) {
    changeNames();
    aiName.value = htReaders[htCurrent].AI;
  }
}