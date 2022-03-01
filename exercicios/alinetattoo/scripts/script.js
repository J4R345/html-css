const theme = window.localStorage.getItem("theme");

const btnModal = document.querySelector(".button-modal")
const popUp = document.querySelector (".modal-promo")
/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */

if (theme === "dark-mode") document.body.classList.add("dark-mode");


 document.getElementById("btnDark").addEventListener("click", () =>{
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (theme === "dark-mode") {
        window.localStorage.setItem("theme", "light-mode");
      } else window.localStorage.setItem("theme", "dark-mode");
 })

 btnModal.addEventListener ('click', () => {
   popUp.style.display = 'none'

 })