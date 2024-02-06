let button = document.getElementById("button");

const changeboss = async () => {
        let randomnum = Math.ceil(Math.random * 59) + 1;

        let requeststr = `https://mhw-db.com/monsters/${randomnum}`;

        let data = await fetch(requeststr);
        console.log(data);
        let reponse = data.json();
        console.log(reponse);
    
}



button.addEventListener("click" , changeboss)