//Variaveis Globais 

const addCurrencyBtn = document.querySelector(".adicionar-botao-moedas");
const addCurrencyList = document.querySelector(".adicionar-lista-moedas");
const currencies = [
{
    name: "Real Brasileiro",
    abbreviation: "BRL",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/br.gif"
},
{
    name: "Dolar Americano",
    abbreviation: "USD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
},
{
    name: "Euro",
    abbreviation: "EUR",
    symbol: "$",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
},
{
    name: "Libra esterlina",
    abbreviation: "GBP",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
},
{
    name: "Dolar Canadense",
    abbreviation: "CAD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
},
{
    name: "Iene Japonês",
    abbreviation: "JPY",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/jp.gif"
},
{
    name: "Dolar Australiano",
    abbreviation: "AUD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
},
{
    name: "Yuan Renminbi Chinês",
    abbreviation: "CNY",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
},
{
    name: "Peso Mexicano",
    abbreviation: "MXN",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/mx.gif"
},
{
    name: "Dolar de Hong Kong",
    abbreviation: "HKD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/hk.gif"
},
{
    name: "Rublo Russo",
    abbreviation: "RUB",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/ru.gif"
},
{
    name: "Franco Suiço",
    abbreviation: "CHF",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/ch.gif"
},
{
    name: "Rand Sul Africano",
    abbreviation: "ZAR",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/za.gif"
},
{
    name: "Shekel Israelita",
    abbreviation: "ILS",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/il.gif"
},
{
    name: "Won Sul Coreano",
    abbreviation: "KRW",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/kr.gif"
},
{
    name: "Peso Argentino",
    abbreviation: "ARS",
    symbol: "$",
    flagURL: "https://img.geonames.org/flags/x/ar.gif"
},
{
    name: "Dolar de Singapura",
    abbreviation: "SGD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/sg.gif"
},
{
    name: "Pupia Indiana",
    abbreviation: "IDR",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/id.gif"
},
{
    name: "Dolar Neozelandês",
    abbreviation: "NZD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/nz.gif"
},
{
    name: "Lira Turca",
    abbreviation: "TRY",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/tr.gif"
  },
];

// Eventos
addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event){
    addCurrencyBtn.classList.toggle("open");
}

//Função Auxiliar 
function populateaddCurrencyList(){
     for(let i=0;i<currencies.length;i++){
         addCurrencyList.insertAdjacentHTML(
             "beforeend",
             `<li moeda-atual="USD" class="disabled">
             <img src="http://www.geonames.org/flags/l/us.gif" class="bandeira"><span>USD - Dolar Americano</span>
             </li>`);
     }
}
populateaddCurrencyList();