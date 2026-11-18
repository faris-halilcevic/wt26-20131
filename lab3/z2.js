function vjezbanje(n, k){
for (let i = 0; i < n; i++){
    console.log('Set broj ${i}');
    if(i === n) {console.log("KRAJ VJEZBE"); return;}
    if(i % k === 0){
        console.log('Pauza');
    }   
}
return;
}

let unos = prompt("Unesite broj setova u vjezbi: ");

if (unos === null) {
    console.log("Unos setova je otkazan");
} else {
        unos = unos.trim();

    if (unos === "") {
        alert("Polje za unos ne može biti prazno");
    } else {
        let n = Number(unos);

        if (isNaN(k)) {
            alert("Uneseni broj mora biti ispravan broj!");
        } else if (k <= 0) {
            alert("broj ne može biti negativan ili nula");
        }
    }

        let unos2 = prompt("Unesite broj setova nakon kojih ide pauza: ");
        if (unos2 === null) {
    console.log("Unos pauza je otkazan");
        } else {
        unos2 = unos.trim();

    if (unos2 === "") {
        alert("Polje za unos ne može biti prazno");
    } else {
        let k = Number(unos2);

        if (isNaN(k)) {
            alert("Uneseni broj mora biti ispravan broj!");
        } else if (k <= 0) {
            alert("broj ne može biti negativan ili nula");
        }


           
        
    }
} 
vjezbanje(n,k);
    }
