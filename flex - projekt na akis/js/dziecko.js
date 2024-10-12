function jakaKlasa(numerDziecka){
    if(numerDziecka==1) return "fitem1";
    if(numerDziecka==2) return "fitem2";
    if(numerDziecka==3) return "fitem3";
    if(numerDziecka==4) return "fitem4";
    else return -1;
}

function jakieDziecko(numerOdInputa){
    const dziecko = document.querySelector("." + jakaKlasa(numerOdInputa));
    return dziecko;
}

function order(){
    const numerOdInputa = document.querySelector("main #klasaorder").value;
    const dziecko = jakieDziecko(numerOdInputa);
    const wartosc = document.querySelector("#order").value;

    dziecko.style.order = wartosc;
}

function grow(){
    const numerOdInputa = document.querySelector("main #klasagrow").value;
    const dziecko = jakieDziecko(numerOdInputa);
    const wartosc = document.querySelector("#grow").value;

    dziecko.style.flexGrow = wartosc; 
}

function shrink(){
    const numerOdInputa = document.querySelector("main #klasashrink").value;
    const dziecko = jakieDziecko(numerOdInputa);
    const wartosc = document.querySelector("#shrink").value;

    dziecko.style.flexShrink = wartosc; 
}

function basis(){
    const numerOdInputa = document.querySelector("main #klasabasis").value;
    const dziecko = jakieDziecko(numerOdInputa);
    const wartosc = document.querySelector("#basis").value;

    dziecko.style.flexBasis = wartosc; 
}

function flex(){
    const numerOdInputa = document.querySelector("main #klasaflex").value;
    const dziecko = jakieDziecko(numerOdInputa);
    const wartosc = document.querySelector("#flex").value;

    dziecko.style.flex = wartosc; 
}

function self(){
    const numerOdInputa = document.querySelector("main #klasaself").value;
    const dziecko = jakieDziecko(numerOdInputa);
    const wartosc = document.querySelector("#self").value;

    dziecko.style.alignSelf = wartosc; 
}

function margin(){
    const numerOdInputa = document.querySelector("main #klasamargin").value;
    const dziecko = jakieDziecko(numerOdInputa);
    const wartosc = document.querySelector("#margin").value;

    dziecko.style.margin = wartosc; 
}

function reset(numerWlasciwosci){
    let wartoscDomyslna;
    let wlasciwosc;

    if(numerWlasciwosci==1){
        wartoscDomyslna=0;
        wlasciwosc="order";
    }
        
    else if(numerWlasciwosci=2){
        wartoscDomyslna=0;
        wlasciwosc="flex-grow";
    }
    
    else if(numerWlasciwosci==3){
        wartoscDomyslna=1;
        wlasciwosc="flex-shrink";
    }

    else if(numerWlasciwosci==4){
        wartoscDomyslna="auto";
        wlasciwosc="flex-basis";
    }

    else if(numerWlasciwosci==5){
        wartoscDomyslna="0 1 auto";
        wlasciwosc="flex";
    }

    else if(numerWlasciwosci==6){
        wartoscDomyslna="auto";
        wlasciwosc="align-self";
    }

    else if(numerWlasciwosci==7){
        wartoscDomyslna=0;
        wlasciwosc="margin";
    }


    const e1 = document.getElementsByClassName("fitem1")
    const e2 = document.getElementsByClassName("fitem2")
    const e3 = document.getElementsByClassName("fitem3")
    const e4 = document.getElementsByClassName("fitem4")

    e1[0].style=`${wlasciwosc}:${wartoscDomyslna};`;
    e2[0].style=`${wlasciwosc}:${wartoscDomyslna};`;
    e3[0].style=`${wlasciwosc}:${wartoscDomyslna};`;
    e4[0].style=`${wlasciwosc}:${wartoscDomyslna};`;
}