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
