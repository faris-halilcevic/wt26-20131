
function procijeniSutera(postotak) {
    const p1 = 30; // Prvi prag
    const p2 = 40; // Drugi prag

   
    if (postotak <= p1) {
        return "los suter";
    } else if (postotak <= p2) {
        return "solidan suter";
    } else {
        return "odlican suter";
    }
}


let unos = prompt("Unesite postotak pogodjenih trica: ");

if (unos === null) {
    console.log("Unos je otkazan");
} else {
        unos = unos.trim();

    if (unos === "") {
        alert("Polje za unos ne može biti prazno");
    } else {
        let postotak = Number(unos);

        if (isNaN(postotak)) {
            alert("Uneseni postotak mora biti ispravan broj!");
        } else if (postotak < 0) {
            alert("postotak ne može biti negativna!");
        }
        else if(postotak > 100){
            alert("postotak ne moze biti veci od 100");
        } else {
            let rezultat = procijeniSutera(postotak);
            
            console.log(`Uneseni postotak: ${postotak}%`);
            console.log(`Procijenjena kategorija: ${rezultat}`);
            
            alert(`Rezultat procjene: ${rezultat}`);
        }
    }
}