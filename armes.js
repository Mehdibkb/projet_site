document.addEventListener("DOMContentLoaded", function () {
    fetch('https://mhw-db.com/weapons')
    .then(response => response.json())
    .then(data => {
        const weaponList = document.getElementById('weaponList');
        data.sort((a, b) => a.id - b.id); // Sort by ID
        data.forEach(weapon => {
            const listItem = document.createElement('li');
            listItem.textContent = weapon.name;
            listItem.addEventListener('click', () => showweaponInfo(weapon)); // Add click event listener
            weaponList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});