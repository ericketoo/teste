const imagem = document.getElementById("imagem");
let imagemAmpliada = false;

imagem.addEventListener("click", function () {
  if (imagemAmpliada) {
    imagem.classList.remove("imagem-grande");
    imagemAmpliada = false;
  } else {
    imagem.classList.add("imagem-grande");
    imagemAmpliada = true;
  }
});
