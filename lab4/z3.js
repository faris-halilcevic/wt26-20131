console.log("Skripta radi!");
document.getElementById('evidencija-form').addEventListener('submit', function(e) {
    // 1. Spriječavamo osvježavanje stranice
    e.preventDefault();

    // Dohvatanje elemenata forme i greške
    const inputNaziv = document.getElementById('naziv');
    const inputIznos = document.getElementById('iznos');
    const spanGreska = document.getElementById('poruka-greske');

    const nazivVal = inputNaziv.value.trim();
    const iznosVal = parseFloat(inputIznos.value);

    spanGreska.textContent = ""; // Očisti prethodne greške

    if (nazivVal === "") {
        spanGreska.textContent = "Greška: Naziv ne smije biti prazan!";
        return;
    }
    if (isNaN(inputIznos.value) || inputIznos.value.trim() === "") {
        spanGreska.textContent = "Greška: Iznos mora biti validan broj!";
        return;
    }
    if (iznosVal < 0) {
        spanGreska.textContent = "Greška: Iznos ne smije biti negativan!";
        return;
    }

    const tbody = document.getElementById('tabela-tijelo');
    

    const noviRed = tbody.insertRow();

    const celijaNaziv = noviRed.insertCell(0);
    const celijaIznos = noviRed.insertCell(1);

    celijaNaziv.textContent = nazivVal;
    celijaIznos.textContent = iznosVal.toFixed(2);

    // 4. Ažuriranje zbira
    azurirajZbir();

    // 5. Resetovanje forme nakon uspješnog unosa
    inputNaziv.value = "";
    inputIznos.value = "";
    inputNaziv.focus();
});


function azurirajZbir() {
    const tbody = document.getElementById('tabela-tijelo');
    const redovi = tbody.getElementsByTagName('tr');
    let zbir = 0;

    for (let i = 0; i < redovi.length; i++) {
        const iznosTekst = redovi[i].cells[1].textContent;
        zbir += parseFloat(iznosTekst);
    }

    document.getElementById('ukupni-zbir').textContent = zbir.toFixed(2);
}