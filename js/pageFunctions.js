var bookmark = document.getElementById('bookmark');

/*****************FUNCTIONS*****************/
function setBookmark() {
  htReaders[htCurrent].bookmark = bookmark.value;
  saveLocalStorage();
}