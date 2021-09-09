function showGuests() {
  const div = document.getElementById('collapse');
  div.style.display = 'block';
  const divButton = document.getElementById('undo-collapse-div');
  divButton.style.display = 'block';
  const moreButtonDiv = document.getElementById('do-collapse-div');
  moreButtonDiv.style.display = 'none';
}

const moreButton = document.getElementById('do-collapse');
moreButton.addEventListener('click', showGuests);

function hideGuests() {
  const div = document.getElementById('collapse');
  div.style.display = 'none';
  const moreButtonDiv = document.getElementById('do-collapse-div');
  moreButtonDiv.style.display = 'block';
  const lessButtonDiv = document.getElementById('undo-collapse-div');
  lessButtonDiv.style.display = 'none';
}

const lessButton = document.getElementById('undo-collapse');
lessButton.addEventListener('click', hideGuests);

function showPopup() {
  const div = document.getElementById('mobile-nav');
  div.style.display = 'flex';
}

const hamburger = document.getElementById('Hamburger');
hamburger.addEventListener('click', showPopup);

const cancelImage = document.getElementById('cancel-img');

function clickCancel() {
  const menu = document.getElementById('mobile-nav');
  menu.style.display = 'none';
}

cancelImage.addEventListener('click', clickCancel);

const listItems = document.querySelectorAll('ul.mobile-nav-menu-list > li');
listItems.forEach((x) => x.addEventListener('click', clickCancel));
