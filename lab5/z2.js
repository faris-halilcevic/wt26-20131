const mojProfil = napraviProfil();

// Pozivamo pregled i čuvamo rezultat u varijablu
let trenutniProfil = mojProfil.pregled();
console.log(trenutniProfil.naziv); // Ispis: "Početni"

// Spoljašnja izmjena svojstva direktno nad dobijenim objektom
trenutniProfil.naziv = "Hakovani Naziv";

// Predvidivi rezultat sljedećeg poziva pregled()
console.log(mojProfil.pregled().naziv); // Ispis: "Hakovani Naziv"

function napraviProfil() {
  let profil = { 
    naziv: "Početni",
    id: 1 // Dodano primitivno svojstvo po izboru
  };

  return {
    pregled: function() { 
      // Vraćamo novi objekat (kopiju) sa istim vrijednostima
      return { 
        naziv: profil.naziv, 
        id: profil.id 
      }; 
    },
    postaviNaziv: function(n) { 
      profil.naziv = n; 
    }
  };
}

// Testiranje prepravljenog modula:
const sigurniProfil = napraviProfil();
let spoljasnjiPregled = sigurniPregled = sigurniProfil.pregled();

spoljasnjiPregled.naziv = "Pokušaj izmjene";

console.log(sigurniProfil.pregled().naziv); // Ispisuje: "Početni" (stanje je zaštićeno!)