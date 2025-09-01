document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // swap placeholder with real image
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));

  const galaxy_wrapper = document.getElementById("hero-galazy-wrapper-div");
    galaxy_wrapper.style.display = "block";
});