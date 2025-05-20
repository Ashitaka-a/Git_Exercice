// Démo // 

function direBonjour() {
  alert("Bonjour !");
}

// Demo 2 //

let bouton = document.getElementById("btnEvent");

bouton.addEventListener("click", function() {
  alert("Événement capturé avec addEventListener !");
});

// Demo 3 //

document.getElementById("btnEventObject").addEventListener("click", function(event) {
  console.log(event);
  alert("Regarde dans la console !");
});

// Demo 4 // 

let zone = document.getElementById("zoneMultiEvent");

zone.addEventListener("mouseover", function() {
  zone.style.backgroundColor = "yellow";
});

zone.addEventListener("mouseout", function() {
  zone.style.backgroundColor = "lightblue";
});