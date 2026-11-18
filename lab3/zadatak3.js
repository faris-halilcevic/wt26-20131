function napraviTabelu() {

    // Pronalazimo div u koji ćemo smjestiti tabelu
    let kontejner = document.getElementById("tabela");

    // Kreiramo novi HTML element table
    let tabela = document.createElement("table");

    // Petlja za kreiranje redova
    for (let i = 0; i <= 10; i++) {

        // Kreiramo novi red
        let red = document.createElement("tr");

        // Petlja za kreiranje ćelija
        for (let j = 0; j <= 10; j++) {

            // Kreiramo novu ćeliju
            let celija = document.createElement("td");

            // Gornji lijevi ugao
            if (i === 0 && j === 0) {
                celija.innerHTML = "X";
                celija.className = "zaglavlje";
            }

            // Zaglavlje kolona
            else if (i === 0) {
                celija.innerHTML = j;
                celija.className = "zaglavlje";
            }

            // Zaglavlje redova
            else if (j === 0) {
                celija.innerHTML = i;
                celija.className = "zaglavlje";
            }

            // Vrijednosti tablice množenja
            else {
                celija.innerHTML = i * j;

                // Svaki drugi red dobija žutu pozadinu
                if (i % 2 === 0) {
                    celija.className = "zuti-red";
                }
            }

            red.appendChild(celija);
        }

        tabela.appendChild(red);
    }

    kontejner.appendChild(tabela);
}


napraviTabelu();