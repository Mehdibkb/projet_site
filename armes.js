document.addEventListener("DOMContentLoaded", function () {
    fetch('https://mhw-db.com/weapons')
    .then(response => response.json())
    .then(data => {
      const armes = data.sort(weapon => weapon.type);
      console.log(armes);
      armes_infos(data);
    });
    }
    );

function armes_infos(data) {
    for(n = 0; n < 1299; n++ ){ 
        const arme_Nom = data[n];
        const armeDiv = document.getElementById("weaponList");
        const weaponName = arme_Nom.name;
        const heading = document.createElement("li");
        heading.innerHTML = weaponName;
        armeDiv.appendChild(heading);
      }
    }