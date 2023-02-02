// let entrada = parseInt(prompt("Digite o ano que você nasceu"));
// alert(2023 + entrada);
// alert(typeof entrada);
//ctrl + ;

let main = document.querySelector("main");
let h1 = document.querySelector("h1");

function darkMode() {
  main.classList.toggle("dark");
  h1.classList.toggle("darkText");
}
