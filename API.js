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
    grandmonstre(data)
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

  function grandmonstre(data) {
    for(n; n ; n++ ){ 
    const monstre_Nom = data[n];
    const monstreDiv2 = document.getElementById("grandmonstre");
    // monstre nom
    const monstreName = monstre_Nom.name;
    const heading = document.createElement("li");
    heading.innerHTML = monstreName;
    monstreDiv2.className = 'content';
    monstreDiv2.appendChild(heading);
  }
  }