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
  }
}