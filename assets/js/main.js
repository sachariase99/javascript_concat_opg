// 1:
const fornavn = "Jannick";
const efternavn = "Sachariasen";
const fuldtNavn = fornavn.concat(" ", efternavn);
console.log(fuldtNavn);

// 2:
const brugernavn = "Sachariasen";
const velkomstbesked = "Velkommen, ".concat(brugernavn, "!");
console.log(velkomstbesked);

// 3:
const by = "Storvorde";
const postnummer = "9280";
const adresse = by.concat(", ", postnummer);
console.log(adresse);

// 4:
// Opgave 4: Ferieplanlægning med concat()
const ferieDestination = "Frankrig";
const feriePlan = "Jeg planlægger at tage til ".concat(ferieDestination, " i næste uge.");
console.log(feriePlan);

// 5:
const produktNavn = "CD";
const produktPris = "15";
const produktBesked = "Det valgte produkt er ".concat(produktNavn, ", og det koster ", produktPris, " dollars.");
console.log(produktBesked);