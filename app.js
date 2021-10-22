const rubr = [];

function subscribe(){
    let dati = prompt("Inserisci i tuoi dati separati da una virgola");
    let input = dati.split(',');

        let newUser = userCreation(input);
        addUser(newUser);
        console.log(rubr);
    }

function userCreation(arrData){
        let user = {
        nome: arrData[0],
        cognome: arrData[1],
        numero: arrData[2],
        email: arrData [4]
    }
    return user;
}


function addUser(user){
    rubr.push(user);
}

