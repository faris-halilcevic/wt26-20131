function dodajDva(broj) {
    return broj + 2;
}

console.log(dodajDva(1));  // 3
console.log(dodajDva(2));  // 4
console.log(dodajDva(10)); // 12

function jednom(callback) {
    let pozvano = false;
    let zapamceniRezultat;

    return function(arg) {
        if (!pozvano) {
            zapamceniRezultat = callback(arg);
            pozvano = true;
        }
        return zapamceniRezultat;
    };
}

const jednomFunkcija = jednom(dodajDva);

console.log(jednomFunkcija(4));    
console.log(jednomFunkcija(10));   
console.log(jednomFunkcija(9001)); 