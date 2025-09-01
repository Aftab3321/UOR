function lazyLoad() {
  const lazyImages = document.querySelectorAll("img.lazy");
  lazyImages.forEach(img => {
    if (img.getBoundingClientRect().top < window.innerHeight) {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    }
  });
}

window.addEventListener("scroll", lazyLoad);
window.addEventListener("load", lazyLoad);
