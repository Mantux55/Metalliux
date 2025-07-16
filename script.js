document.addEventListener('DOMContentLoaded', () => {

  // Mygtukas "Į viršų"
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

  // Galerijos lightbox
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        openLightbox(e.target);
      }
    });
  }

  function openLightbox(img) {
    const lightboxBg = document.createElement('div');
    lightboxBg.id = 'lightboxBg';
    Object.assign(lightboxBg.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10000',
      cursor: 'pointer',
    });

    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.alt = img.alt;
    Object.assign(largeImg.style, {
      maxWidth: '90%',
      maxHeight: '90%',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.7)',
      transition: 'transform 0.3s ease',
      transform: 'scale(0.8)',
    });

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

  // Fade-in animacija sekcijoms
  const faders = document.querySelectorAll('.section');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

});
