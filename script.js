// script.js

document.addEventListener('DOMContentLoaded', () => {

  // Į viršų mygtuko funkcionalumas
  const topBtn = document.getElementById('topBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Lightbox galerijos didinimas
  const gallery = document.querySelector('.gallery-grid');
  if (gallery) {
    gallery.addEventListener('click', e => {
      if (e.target.tagName === 'IMG') {
        openLightbox(e.target);
      }
    });
  }

  function openLightbox(img) {
    // Sukuriam foną
    const lightboxBg = document.createElement('div');
    lightboxBg.id = 'lightboxBg';
    lightboxBg.style.position = 'fixed';
    lightboxBg.style.top = '0';
    lightboxBg.style.left = '0';
    lightboxBg.style.width = '100%';
    lightboxBg.style.height = '100%';
    lightboxBg.style.backgroundColor = 'rgba(0,0,0,0.8)';
    lightboxBg.style.display = 'flex';
    lightboxBg.style.justifyContent = 'center';
    lightboxBg.style.alignItems = 'center';
    lightboxBg.style.zIndex = '10000';
    lightboxBg.style.cursor = 'pointer';

    // Sukuriam didelį paveikslėlį
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.alt = img.alt;
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '90%';
    largeImg.style.borderRadius = '10px';
    largeImg.style.boxShadow = '0 0 20px rgba(0,0,0,0.7)';
    largeImg.style.transition = 'transform 0.3s ease';
    largeImg.style.transform = 'scale(0.8)';
    setTimeout(() => largeImg.style.transform = 'scale(1)', 10);

    lightboxBg.appendChild(largeImg);
    document.body.appendChild(lightboxBg);

    lightboxBg.addEventListener('click', () => {
      largeImg.style.transform = 'scale(0.8)';
      setTimeout(() => {
        document.body.removeChild(lightboxBg);
      }, 300);
    });
  }

  // Fade-in efektas sekcijoms
  const faders = document.querySelectorAll('.section');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('fade-in');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});
