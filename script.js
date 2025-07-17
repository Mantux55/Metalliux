// GALERIJOS FILTRAVIMAS
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    // Pašaliname aktyvų klasę nuo visų mygtukų
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Rodyti arba slėpti nuotraukas pagal kategoriją
    galleryItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (category === "all" || itemCategory === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// „Į viršų“ mygtuko funkcionalumas
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Sklandus perėjimas tarp sekcijų (kai paspaudžiamas meniu punktas)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
