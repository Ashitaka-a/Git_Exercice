// // On sélectionne tous les blocs d'accordéon
// const blocs = document.querySelectorAll('.accordion__bloc');

// // Pour chaque bloc...
// blocs.forEach(bloc => {
//   // On récupère le titre cliquable
//   const titre = bloc.querySelector('.accordion__title');

//   // Quand on clique sur le titre
//   titre.addEventListener('click', () => {
//     // Si ce bloc est déjà ouvert
//     const estOuvert = bloc.classList.contains('active');

//     // Fermer tous les blocs
//     blocs.forEach(b => {
//       b.classList.remove('active');
//       b.querySelector('.accordion__answer-bloc').style.height = '0';
//     });

//     // Si ce bloc n'était pas déjà ouvert, on l'ouvre
//     if (!estOuvert) {
//       bloc.classList.add('active');

//       // On mesure la hauteur réelle du contenu
//       const contenu = bloc.querySelector('.accordion__answer');
//       const wrapper = bloc.querySelector('.accordion__answer-bloc');

//       // On applique la bonne hauteur pour l’animer
//       wrapper.style.height = contenu.scrollHeight + 'px';
//     }
//   });
// });




function initAccordion() {
  const blocs = document.querySelectorAll('.accordion__bloc');
  blocs.forEach(function(bloc){
    const title = bloc.querySelector('.accordion__title');
    title.addEventListener('click', function(){
      toggleAccordion(bloc);
    })
  })
}
initAccordion();

function toggleAccordion(bloc) {
  let isOpen = bloc.classList.contains('active');
  let wrapper = bloc.querySelector('.accordion__answer-bloc');
  const content = bloc.querySelector('.accordion__answer');
  if (isOpen) {
    bloc.classList.remove('active');
    wrapper.style.height = '0 px';
  } else {
    bloc.classList.add('active');
    wrapper.style.height = content.clientHeight + 'px';

  }
}