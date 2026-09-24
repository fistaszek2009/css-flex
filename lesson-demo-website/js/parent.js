let pudelko = document.getElementById(flexc);
const flexItems = document.querySelectorAll("#flexc div");

function direction() {
  reset(1);
  const wartosc = document.querySelector("#flex-direction").value;

  flexc.style.flexDirection = wartosc;
  if (wartosc == "column" || wartosc == "column-reverse") {
    flexItems.forEach((item) => {
      item.classList.add("temp1");
    });
  }
}

function justify() {
  const wartosc = document.querySelector("#justify-content").value;

  flexc.style.justifyContent = wartosc;
}
function alignItems() {
  const wartosc = document.querySelector("#align-items").value;

  flexc.style.alignItems = wartosc;
}

function alignContent() {
  const wartosc = document.querySelector("#align-content").value;

  flexc.style.alignContent = wartosc;
}

function flexWrap() {
  const wartosc = document.querySelector("#flex-wrap").value;

  flexc.style.flexWrap = wartosc;
}

function flexWrap() {
  const wartosc = document.querySelector("#flex-wrap").value;

  flexc.style.flexWrap = wartosc;
}

function gap() {
  const wartosc = document.querySelector("#gap").value;

  flexc.style.gap = `${wartosc}px`;
}

function reset(numerWlasciwosci) {
  let wartoscDomyslna;

  if (numerWlasciwosci == 1) {
    wartoscDomyslna = "row";
    flexc.style.flexDirection = wartoscDomyslna;

    flexItems.forEach((item) => {
      item.classList.remove("temp1");
    });
  } else if (numerWlasciwosci == 2) {
    wartoscDomyslna = "center";
    flexc.style.justifyContent = wartoscDomyslna;
  } else if (numerWlasciwosci == 3) {
    wartoscDomyslna = "initial";
    flexc.style.alignItems = wartoscDomyslna;
  } else if (numerWlasciwosci == 4) {
    wartoscDomyslna = "nowrap";
    flexc.style.flexWrap = wartoscDomyslna;
  } else if (numerWlasciwosci == 5) {
    wartoscDomyslna = "initial";
    flexc.style.alignContent = wartoscDomyslna;
  } else if (numerWlasciwosci == 6) {
    wartoscDomyslna = "0px";
    flexc.style.gap = wartoscDomyslna;
  }
}
