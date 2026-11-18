function upravljajBodovima(kolicina) {
    if(kolicina < 0) {
        throw new Error("Količina ne smije biti negativna.");
    }
    let bodovi = {broj: kolicina};

    return {
        potrosi: function(iznos){
            if(iznos < 0 || iznos > bodovi.broj) {
                return {uspjesno: false};
        }
        bodovi.broj -= iznos;
        return {uspjesno: true};
    },
        preostalo: function() {
            return bodovi.broj;
        }
};

}

let upravljac1 = upravljajBodovima(100);
let uspjeh = upravljac1.potrosi(30);
console.log(upravljac1.preostalo());
console.log(uspjeh.uspjesno);

let upravljac2 = upravljajBodovima(50);
let uspjeh2 = upravljac2.potrosi(100);
console.log(upravljac2.preostalo());
console.log(uspjeh2.uspjesno);