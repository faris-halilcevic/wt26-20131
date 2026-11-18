let tabela = document.getElementById("tabela");
let zavrseno = document.getElementById("zavrseno");
let reset = document.getElementById("reset");
let ukupno = document.getElementById("ukupno");
let stavke = document.querySelectorAll('.stavka');

stavke.forEach(stavka => {
    let dugme = stavka.nextElementSibling;
    stavka.classList.toggle('zavrseno');
    dugme.addEventListener("click", function() {
        zavrseno.textContent = parseInt(zavrseno.textContent) + 1;
        if(stavka.classList.contains('zavrseno')) {
            stavka.classList.remove('zavrseno');
            dugme.textContent = "Nezavrseno";
            zavrseno.textContent = parseInt(zavrseno.textContent) - 1;
        } else {
            stavka.classList.add('zavrseno');
            dugme.textContent = "zavrseno";
        }
    });
});

reset.addEventListener("click", function() {
    zavrseno.textContent = 0;
    stavke.forEach(stavka => {
        stavka.classList.remove('zavrseno');
        let dugme = stavka.nextElementSibling;
        dugme.textContent = "Nezavrseno";
    });
});