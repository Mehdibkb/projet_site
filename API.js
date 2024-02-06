let button = document.getElementById("button");

const changeboss = async () => {
    let randomnum = 1;
//    let randomnum = Math.ceil(Math.random * 59) + 1;

        let requeststr = `https://mhw-db.com/monsters/${randomnum}`;

        let data = await fetch(requeststr);
        let reponse = await data.json();
        console.log(reponse);
    
}



button.addEventListener("click" , changeboss)