fetch("https://mhw-db.com/monsters")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    petitmonstre(data)
})

function petitmonstre(data) {
    for(n = 0; n < 17 ; n++ ){ 
    const monstre_Nom = data[n];
    const monstreDiv = document.getElementById("monsterList");
    // monstre nom
    const monstreName = monstre_Nom.name;
    const heading = document.createElement("li");
    heading.innerHTML = monstreName;
    monstreDiv.className = 'content';
    monstreDiv.appendChild(heading);
  }
  }