/*****************ON PAGE LOAD*****************/
window.onload = function () {
  var verify = 0;
  if (localStorage.htReaders !== null && localStorage.htReaders !== undefined) {
    loadReaders();
    verify++;
  }

  if (localStorage.htCurrent !== null && localStorage.htCurrent !== undefined) {
    loadCurrent();
    verify++;
  }
  
  if (verify==2) {
    changeNames();
  }
}