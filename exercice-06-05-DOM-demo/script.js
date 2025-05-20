function afficherDOM() {
    console.log(document);
}


function changerTitre() {
    let titre = document.getElementById("titre");
    titre.textContent = "Titre modifié !";
}

function changerParagraphes() {
    let paragraphes = document.getElementsByTagName("p");
  
    for (let i = 0; i < paragraphes.length; i++) {
      paragraphes[i].style.color = "red";
      paragraphes[i].textContent = "Texte modifié !";
    }
  }

  function colorierLi() {
    let listeItems = document.getElementsByTagName("li");
    let tableauItems = Array.from(listeItems);
  
    tableauItems.forEach(function(item) {
      item.style.backgroundColor = "yellow";
    });
  }  

  function changerBoites() {
    let boites = document.querySelectorAll(".boite");
  
    boites.forEach(function(boite) {
      boite.style.border = "2px solid blue";
      boite.textContent = "Boîte modifiée";
    });
  }  


  const ul = document.getElementById('maListe');

  // Récupération initiale des listes
  const htmlCollection = document.getElementsByTagName('li'); // live
  const nodeList = document.querySelectorAll('li'); // statique
  
  console.log('Avant ajout :');
  console.log('HTMLCollection :', htmlCollection.length);
  console.log('NodeList :', nodeList.length);
  
  document.getElementById('ajouter').addEventListener('click', () => {
    const nouveauLi = document.createElement('li');
    nouveauLi.textContent = 'Élément ajouté';
    ul.appendChild(nouveauLi);
  
    console.log('Après ajout :');
    console.log('HTMLCollection :', htmlCollection.length); // mis à jour
    console.log('NodeList :', nodeList.length);             // ne change pas
  });  

  function creerElement() {
    const nouveauParagraphe = document.createElement("p");
    nouveauParagraphe.textContent = "Je suis un nouveau paragraphe !";
    document.getElementById("zoneCreation").appendChild(nouveauParagraphe);
  }

  function modifierTexte() {
    document.getElementById("texteModifiable").textContent = "Texte modifié !";
  } 

  function ajouterClasse() {
    document.getElementById("bloc").classList.add("rotate");
  }  

  function supprimerElement() {
    const element = document.getElementById("aSupprimer");
    element.remove();
  }  

  function deplacerZone() {
    const zone = document.getElementById("zone1");
    const destination = document.getElementById("zone2");
    destination.appendChild(zone);
  }

  function insererAvant() {
    const nouveauItem = document.createElement("li");
    nouveauItem.textContent = "Nouveau avant Item 2";
  
    const item2 = document.getElementById("item2");
    const liste = document.getElementById("maListe");
  
    liste.insertBefore(nouveauItem, item2);
  }