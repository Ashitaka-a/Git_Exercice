// On sélectionne tous les blocs d'accordéon
const blocs = document.querySelectorAll('.accordion__bloc');

// Pour chaque bloc...
blocs.forEach(bloc => {
  // On récupère le titre cliquable
  const titre = bloc.querySelector('.accordion__title');

  // Quand on clique sur le titre
  titre.addEventListener('click', () => {
    // Si ce bloc est déjà ouvert
    const estOuvert = bloc.classList.contains('active');

    // Fermer tous les blocs
    blocs.forEach(b => {
      b.classList.remove('active');
      b.querySelector('.accordion__answer-bloc').style.height = '0';
    });

    // Si ce bloc n'était pas déjà ouvert, on l'ouvre
    if (!estOuvert) {
      bloc.classList.add('active');

      // On mesure la hauteur réelle du contenu
      const contenu = bloc.querySelector('.accordion__answer');
      const wrapper = bloc.querySelector('.accordion__answer-bloc');

      // On applique la bonne hauteur pour l’animer
      wrapper.style.height = contenu.scrollHeight + 'px';
    }
  });
});