/*****************VARIABLES*****************/
var aiName = document.getElementById('aiName');

/*****************FUNCTIONS*****************/
function changeAI() {
  if (aiName.value.trim()!="") {
    htReaders[htCurrent].AI = aiName.value.trim();
    changeClassContent(ai, htReaders[htCurrent].AI);
    
    if (verifyLoad==2) {
      saveLocalStorage();
    }
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
    setBookmark();
    aiName.value = htReaders[htCurrent].AI;
  }
}