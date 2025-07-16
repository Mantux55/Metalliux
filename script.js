// script.js

// Į viršų mygtukas
const topBtn = document.getElementById('topBtn');

// Rodyti mygtuką, kai nuslenkama žemyn
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Grįžti į viršų paspaudus
topBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
