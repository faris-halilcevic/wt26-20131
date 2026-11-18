let dugme = document.getElementById("dugme");
let dugme2 = document.getElementById("dugme2");
let tekst = document.getElementById("tekst");
let naslov = document.getElementById("naslov");
let greska = document.getElementById("greska");
let pregled = document.getElementById("pregled");
let tekstlabel = document.getElementById("tekst-label");
let naslovlabel = document.getElementById("naslov-label");
pregled.addEventListener("click", function() {
   if(naslov.value === "" || tekst.value === "") {
       greska.textContent = "Molimo unesite naslov i tekst!";
   }   
   else {
       tekstlabel.textContent = tekst.value;
       naslovlabel.textContent = naslov.value;
       greska.textContent = "";
   }
});