let pudelko = document.getElementById(flexc);
const flexItems = document.querySelectorAll('#flexc div');

function jakieDziecko(numerOdInputa){
    const dziecko = document.querySelector("." + jakaKlasa(numerOdInputa));
    return dziecko;
}

function direction() {
    const wartosc = document.querySelector("#flex-direction").value;

    flexc.style.flexDirection = wartosc;
    if (wartosc == 'column' || wartosc == 'column-reverse') {
        flexItems.forEach(item => {
            item.classList.add("temp1"); // Use 'item' instead of 'element'
        });
    }
}

function justify() {
    const wartosc = document.querySelector("#justify-content").value;

    flexc.style.justifyContent = wartosc; // Set property directly
}

function reset(numerWlasciwosci) {
    let wartoscDomyslna;
    let wlasciwosc;

    if (numerWlasciwosci == 1) {
        wartoscDomyslna = "row";
        wlasciwosc = "flex-direction";

        flexItems.forEach(item => {
            item.classList.remove("temp1"); // Use 'item' here
        });
    } else if (numerWlasciwosci == 2) {
        wartoscDomyslna = "center";
        wlasciwosc = "justify-content";
    }

    // Set the default value directly
    if (wlasciwosc === "flex-direction") {
        flexc.style.flexDirection = wartoscDomyslna;
    } else if (wlasciwosc === "justify-content") {
        flexc.style.justifyContent = wartoscDomyslna;
    }
}