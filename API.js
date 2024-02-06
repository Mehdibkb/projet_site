let button = document.getElementById("button");

const changeboss = () => {
        let randomnum = Math.ceil(Math.random * 59) + 1;

        let requeststr = `https://mhw-db.com/monsters/${randomnum}`;

        let data = fetch(requeststr);
        console.log(data);
    
}



button.addEventListener("click" , changeboss)