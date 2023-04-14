const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //con "preventDefault()" hago que la pagina no se recargue cuando aprieto el boton (se recarga porque es un "form")

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const messageInput = document.querySelector("#message-input");
  const encrypted = btoa(messageInput.value); //"btoa()" encripta palabras

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`; //"window.location" te devuelve el link a la pagina web
  linkInput.select(); //me selecciona todo el link una vez que se genere
});
