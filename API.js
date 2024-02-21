const menuburger = document.querySelector(".menuburger"); // recupere la classe menuburger
const navlinks = document.querySelector(".navlinks");

navlinks.addEventListener('click', (event) => { // crée un evenenement click sur navlinks
  event.stopPropagation(); // Arrête la propagation de l'événement
  navlinks.classList.toggle('mobile-menu'); // ajoute la classe mobile-menu
});

menuburger.addEventListener('click', (event) => {
  event.stopPropagation(); // Arrête la propagation de l'événement
  navlinks.classList.toggle('mobile-menu'); // supprime la classe mobile-menu
});
fetch("https://mhw-db.com/monsters")// tester L'API monstre
  .then((response) => {
    if (response.ok) {
      return response.json();// si elle marche elle nous rendra une reponse
    } else {
      throw new Error("erreur"); // sinon elle affiche erreur
    }
  })
  .then(data => {
    console.log(data);// commence d'abord par afficher les données de l'API sur la console
    petitmonstre_name(data)// appel à la fonction petitmonstre_name(data)
    petitmonstre_type(data)
    petitmonstre_espece(data)
    petitmonstre_location(data)
    grandmonstre_name(data)
    grandmonstre_type(data)
    grandmonstre_espece(data)
    grandmonstre_location(data)
})

function petitmonstre_name(data) { // fonction  qui affiche les noms des petits monstres de L'API
    for(n = 0; n < 16 ; n++ ){ 
    let monstre_Nom = data[n]; // monstre_Nom reçoit les donnees numero 0 de l'API 
    let monstreDiv1 = document.getElementById("petitmonstre_nom"); // recuperer l'ID petitmonstre_nom qui est sur la div
    //monstre nom
    let monstreName = monstre_Nom.name; // monstreName reçoit le nom du premier monstre reçu par monstre_Nom
    let heading = document.createElement("li"); // creation d'un element ID
    heading.innerHTML = monstreName;// mettre le nom du monstre dans un li
    monstreDiv1.appendChild(heading); //afficher le nom du premier monstre
  }
}
  function petitmonstre_type(data) { // fonction  qui affiche les types des petits monstres de L'API
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
  function petitmonstre_espece(data) { // fonction  qui affiche les especes des petits monstres de L'API
    for(n = 0; n < 16 ; n++ ){ 
    let monstre_espece = data[n];
    let monstreDiv5 = document.getElementById("petitmonstre_espece");
    //monstre espece
    let monstreespece = monstre_espece.species;
    let heading = document.createElement("li");
    heading.innerHTML = monstreespece;
    monstreDiv5.appendChild(heading);
  }
  }
  function petitmonstre_location(data) { // fonction  qui affiche les localisations des petits monstres de L'API
    for(n = 0; n < 16 ; n++ ){ 
    let monstre_location = data[n];
    let monstreDiv7 = document.getElementById("petitmonstre_location");
    //monstre location
    let monstrelocation = monstre_location.locations[0].name;
    let heading = document.createElement("li");
    heading.innerHTML = monstrelocation;
    monstreDiv7.appendChild(heading);
  }
  }
  function grandmonstre_name(data) {  // fonction  qui affiche les noms des grands monstres de L'API
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
function grandmonstre_type(data) { // fonction  qui affiche les types des grands monstres de L'API
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
function grandmonstre_espece(data) { // fonction  qui affiche les especes des grands monstres de L'API
  for(n = 16; n < 32 ; n++ ){ 
  let monstre_espece = data[n];
  let monstreDiv6 = document.getElementById("grandmonstre_espece");
  //monstre espece
  let monstreespece = monstre_espece.species;
  let heading = document.createElement("li");
  heading.innerHTML = monstreespece;
  monstreDiv6.appendChild(heading);
}
}
function grandmonstre_location(data) { // fonction  qui affiche les localisations des grands monstres de L'API
  for(n = 16; n < 32 ; n++ ){ 
  let monstre_location = data[n];
  let monstreDiv8 = document.getElementById("grandmonstre_location");
  //monstre location
  let monstrelocation = monstre_location.locations[0].name;
  let heading = document.createElement("li");
  heading.innerHTML = monstrelocation;
  monstreDiv8.appendChild(heading);
}
}
// ajouter des textes en utilisant le javascript
let petit_monstre_name = document.querySelector("#pmonstre_nom") ;// recuperer l ID petit_monstre_name QUI SE TROUVE DANS UNE DIV
let ul_pnom=document.createElement("ul")// creer l'element ul

let pmonstreName=document.createElement("li");// creer l'element li
pmonstreName.appendChild(document.createTextNode("Name")) // creer un texte au nom de "Name"
ul_pnom.appendChild(pmonstreName)// ul qui s'unie avec le li
petit_monstre_name.appendChild(ul_pnom)// afficher "Name" comme reference pour petit monstre

let petit_monstre_type = document.querySelector("#pmonstre_type") ;
const ul_ptype=document.createElement("ul");

const pmonstreType=document.createElement("li");
pmonstreType.appendChild(document.createTextNode("Type"))
ul_ptype.appendChild(pmonstreType)
petit_monstre_type.appendChild(ul_ptype)// afficher "Type" comme reference pour petit monstre

let petit_monstre_espece = document.querySelector("#pmonstre_espece") ;
const ul_pespece=document.createElement("ul");

const pmonstreespece=document.createElement("li");
pmonstreespece.appendChild(document.createTextNode("Espece"))
ul_pespece.appendChild(pmonstreespece)
petit_monstre_espece.appendChild(ul_pespece)// afficher "espece" comme reference pour petit monstre

let petit_monstre_location = document.querySelector("#pmonstre_location") ;
const ul_plocation =document.createElement("ul");

const pmonstrelocation=document.createElement("li");
pmonstrelocation.appendChild(document.createTextNode("Location"))
ul_plocation.appendChild(pmonstrelocation)
petit_monstre_location.appendChild(ul_plocation)// afficher "location" comme reference pour petit monstre

let grand_monstre_name = document.querySelector("#gmonstre_nom") ;
let ul_gnom=document.createElement("ul");

let gmonstreName=document.createElement("li");
gmonstreName.appendChild(document.createTextNode("Name"))
ul_gnom.appendChild(gmonstreName)
grand_monstre_name.appendChild(ul_gnom)// afficher "Name" comme reference pour grand monstre

let grand_monstre_type = document.querySelector("#gmonstre_type") ;
const ul_gtype=document.createElement("ul");

const gmonstreType=document.createElement("li");
gmonstreType.appendChild(document.createTextNode("Type"))
ul_gtype.appendChild(gmonstreType)
grand_monstre_type.appendChild(ul_gtype)// afficher "Type" comme reference pour grand monstre

let grand_monstre_espece = document.querySelector("#gmonstre_espece") ;
const ul_gespece=document.createElement("ul");

const gmonstreespece=document.createElement("li");
gmonstreespece.appendChild(document.createTextNode("Espece"))
ul_gespece.appendChild(gmonstreespece)
grand_monstre_espece.appendChild(ul_gespece)// afficher "espece" comme reference pour grand monstre

let grand_monstre_location = document.querySelector("#gmonstre_location") ;
const ul_glocation =document.createElement("ul");

const gmonstrelocation=document.createElement("li");
gmonstrelocation.appendChild(document.createTextNode("Location"))
ul_glocation.appendChild(gmonstrelocation)
grand_monstre_location.appendChild(ul_glocation) // afficher "location" comme reference pour grand monstre