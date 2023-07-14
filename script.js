const imagens = document.querySelectorAll(".imagem-galeria");
const lightBox = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox-image");
const btnFechar = document.querySelector("a");

imagens.forEach((item) => {
  item.addEventListener("click", ({ target }) => {
    const url = target.src;
    lightBoxImage.setAttribute("src", url);
    lightBox.style.display = "flex";
  });
  btnFechar.addEventListener("click", (event) => {
    event.preventDefault();
    lightBox.style.display = "none";
  });
});
