let pudelko = document.getElementById(flexc);
const flexItems = document.querySelectorAll('#flexc div');

function jakieDziecko(numerOdInputa){
    const dziecko = document.querySelector("." + jakaKlasa(numerOdInputa));
    return dziecko;
}

function direction(){
    const wartosc = document.querySelector("#flex-direction").value;

    flexc.style.flexDirection = wartosc;
    if(wartosc == 'column' || wartosc == 'column-reverse')
        flexItems.forEach(item => {
            item.style.width = '100%';
            item.style.height = '100px';
        });
}

function justify(){
    const wartosc = document.querySelector("#justify-content").value;

    flexc.style = `justify-content:${wartosc}`;
}

function reset(numerWlasciwosci){
    let wartoscDomyslna;
    let wlasciwosc;

    if(numerWlasciwosci == 1)
    {
        wartoscDomyslna = "row";
        wlasciwosc="flex-direction";

        flexItems.forEach(item => {
            item.style.width = '';
            item.style.height = '';
        });
    }
    else if(numerWlasciwosci == 2)
    {
        wartoscDomyslna = "center";
        wlasciwosc="justify-content";
    }

    flexc.style=`${wlasciwosc}:${wartoscDomyslna};`;
}