// Rodo arba slepia mygtuką "Į viršų"
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Grąžina į puslapio viršų
topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Galerijos peržiūra (lightbox)
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "9999";

      const largeImg = document.createElement("img");
      largeImg.src = img.src;
      largeImg.style.maxWidth = "90%";
      largeImg.style.maxHeight = "90%";
      largeImg.style.borderRadius = "10px";

      overlay.appendChild(largeImg);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
});
