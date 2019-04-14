// active tab
document.getElementById('gallery-tab').classList.add('active');
// sidebar
const teleClick = document.getElementById('tele-click');
const jazzClick = document.getElementById('jazz-click');
const jagClick = document.getElementById('jag-click');
const mustangClick = document.getElementById('mustang-click');

const slide = document.getElementById('slide');
const gallery = document.getElementById('gallery');

const images = ['1.png', '2.png', '3.png'];
const folders = ['telecaster', 'jazzmaster', 'jaguar', 'mustang'];
// Change Image
var i = 0;
var j = 0;
function changeImg() {
  const currFolder = `../media/fender/${folders[j]}`;
  slide.src = `${currFolder}/${images[i]}`;
  slide.alt = `${folders[j]}`;
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg, 5000);
}
window.onload = changeImg;

//
function currFolder(i) {
  guitar1.src = `../media/fender/${folders[i]}/1.png`;
  guitar2.src = `../media/fender/${folders[i]}/2.png`;
  guitar3.src = `../media/fender/${folders[i]}/3.png`;
  guitar1.alt = `${folders[i]}`;
  guitar2.alt = `${folders[i]}`;
  guitar3.alt = `${folders[i]}`;

  slide.src = `../media/fender/${folders[j]}/${images[i]}`;
}

function tele() {
  j = 0;
  console.log('hi');
  currFolder(j);
}

function jazz() {
  j = 1;
  console.log('hi');
  currFolder(j);
}

function jag() {
  j = 2;
  console.log('hi');
  currFolder(j);
}
function mus() {
  j = 3;
  console.log('hi');
  currFolder(j);
}
//
document.getElementById('sidebar').addEventListener('click', () => {
  sidebar.classList.toggle('toggle-sidebar');
  const arrow = document.getElementById('sidebar-arrow').classList;
  arrow.toggle('sidebar-arrow-r');
  arrow.toggle('sidebar-arrow-l');
});
/**
 * Use Sidebar
 */
function setupNavMain(evt) {
  evt.preventDefault();
  if (this.id == 'tele-click') {
    this.onclick = tele;
  }
  if (this.id == 'jazz-click') {
    this.onclick = jazz;
  }
  if (this.id == 'jag-click') {
    this.onclick = jag;
  }
  if (this.id == 'mustang-click') {
    this.onclick = mus;
  }
}

document.querySelectorAll('.sidebar-content div').forEach(div => {
  div.onmouseover = setupNavMain;
});
