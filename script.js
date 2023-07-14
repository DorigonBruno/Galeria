function scriptCompleto() {
  const imagens = document.querySelectorAll(".imagem-galeria");
  const lightBox = document.querySelector(".lightbox");
  const lightBoxImage = document.querySelector(".lightbox-image");
  const btnFechar = document.querySelector("a");

  function handleClick(event) {
    const url = event.currentTarget.src;
    lightBoxImage.setAttribute("src", url);
    lightBox.style.display = "flex";
  }

  function handleClose(event) {
    event.preventDefault();
    lightBox.style.display = "none";
  }

  imagens.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  btnFechar.addEventListener("click", handleClose);
}
scriptCompleto();
