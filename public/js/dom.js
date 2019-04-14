const cardBtn = document.querySelectorAll('.card-btn');
const closeBtn = document.querySelectorAll('.modal-btn');
const modal = document.getElementById('modal');

cardBtn.forEach(btn => (btn.onclick = setModals));
closeBtn.forEach(btn => (btn.onclick = closeModal));

function setModals() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}
