let article = document.getElementById("myArticle");
let texte = article.textContent;
let mots = texte.trim().split(/\s+/);
let nombreDeMots = mots.length;

console.log(nombreDeMots);


function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }