const learnMoreBtn = document.getElementById('learn-more');
const sectionCtn = document.getElementById('section-content');

learnMoreBtn.addEventListener('click', () => {
  sectionCtn.classList.toggle('show-hide');
});
