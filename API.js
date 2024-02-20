const menuburger = document.querySelector(".menuburger");
const navlinks = document.querySelector(".navlinks");

navlinks.addEventListener('click', (event) => {
  event.stopPropagation(); // Arrête la propagation de l'événement
  navlinks.classList.toggle('mobile-menu');
});

menuburger.addEventListener('click', (event) => {
  event.stopPropagation(); // Arrête la propagation de l'événement
  navlinks.classList.toggle('mobile-menu');
});
fetch("https://mhw-db.com/monsters")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("erreur");
    }
  })
  .then(data => {
    console.log(data);
    petitmonstre_name(data)
    petitmonstre_type(data)
    grandmonstre_name(data)
    grandmonstre_type(data)
})

function petitmonstre_name(data) {
    for(n = 0; n < 16 ; n++ ){ 
    let monstre_Nom = data[n];
    let monstreDiv1 = document.getElementById("petitmonstre_nom");
    //monstre nom
    let monstreName = monstre_Nom.name;
    let heading = document.createElement("li");
    heading.innerHTML = monstreName;
    monstreDiv1.appendChild(heading);
  }
}
  function petitmonstre_type(data) {
    for(n = 0; n < 16 ; n++ ){ 
    let monstre_type = data[n];
    let monstreDiv3 = document.getElementById("petitmonstre_type");
    //monstre typr
    let monstre_petit_type = monstre_type.type;
    let heading = document.createElement("li");
    heading.innerHTML = monstre_petit_type;
    monstreDiv3.appendChild(heading);
  }
  }
  function grandmonstre_name(data) {
    for(n; n < 32 ; n++ ){ 
    let monstre_Nom = data[n];
    let monstreDiv2 = document.getElementById("grandmonstre_nom");
    //monstre nom
    let monstreName = monstre_Nom.name;
    let heading = document.createElement("li");
    heading.innerHTML = monstreName;
    monstreDiv2.appendChild(heading);
  }
}
function grandmonstre_type(data) {
  for(n = 16; n < 32 ; n++ ){ 
  let monstre_type = data[n];
  let monstreDiv4 = document.getElementById("grandmonstre_type");
  //monstre type
  let monstretype = monstre_type.type;
  let heading = document.createElement("li");
  heading.innerHTML = monstretype;
  monstreDiv4.appendChild(heading);
}
}