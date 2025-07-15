// Sklandus slinkimas prie sekcijų
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Grįžti į viršų mygtuko logika
const topBtn = document.createElement('button');
topBtn.textContent = '↑ Į viršų';
topBtn.id = 'topBtn';
document.body.appendChild(topBtn);

topBtn.style.position = 'fixed';
topBtn.style.bottom = '30px';
topBtn.style.right = '30px';
topBtn.style.padding = '10px 15px';
topBtn.style.backgroundColor = '#1a4e80';
topBtn.style.color = 'white';
topBtn.style.border = 'none';
topBtn.style.borderRadius = '6px';
topBtn.style.cursor = 'pointer';
topBtn.style.display = 'none';
topBtn.style.zIndex = '1000';

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});
