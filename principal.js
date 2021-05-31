//Variaveis Globais 

const addCurrencyBtn = document.querySelector(".adicionar-botao-moedas");
const addCurrencyList = document.querySelector(".adicionar-lista-moedas");
const currenciesList = document.querySelector(".moedas");

const dataURL = "https://api.exchangeratesapi.io/latest";

const initiallyDisplayedCurrencies = ["BRL", "USD", "EUR", "GBP", "CAD"];
let baseCurrency;
let baseCurrencyAmount;


const currencies = [
{
    name: "Real Brasileiro",
    abbreviation: "BRL",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/br.gif",
    rate: 5.37
},
{
    name: "Dolar Americano",
    abbreviation: "USD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/us.gif",
    rate: 1
},
{
    name: "Euro",
    abbreviation: "EUR",
    symbol: "$",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    rate: 0.82
},
{
    name: "Libra esterlina",
    abbreviation: "GBP",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/uk.gif",
    rate: 0.71
},
{
    name: "Dolar Canadense",
    abbreviation: "CAD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/ca.gif",
    rate: 1.21
},
{
    name: "Iene Japonês",
    abbreviation: "JPY",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/jp.gif",
    rate: 108.93
},
{
    name: "Dolar Australiano",
    abbreviation: "AUD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/au.gif",
    rate: 1.29
},
{
    name: "Yuan Renminbi Chinês",
    abbreviation: "CNY",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/cn.gif",
    rate: 6.43
},
{
    name: "Peso Mexicano",
    abbreviation: "MXN",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/mx.gif",
    rate: 19.95
},
{
    name: "Dolar de Hong Kong",
    abbreviation: "HKD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/hk.gif",
    rate: 7.76
},
{
    name: "Rublo Russo",
    abbreviation: "RUB",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/ru.gif",
    rate:  73.62 
},
{
    name: "Franco Suiço",
    abbreviation: "CHF",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/ch.gif",
    rate: 0.90 
},
{
    name: "Rand Sul Africano",
    abbreviation: "ZAR",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/za.gif",
    rate: 13.96
},
{
    name: "Shekel Israelita",
    abbreviation: "ILS",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/il.gif",
    rate: 3.26
},
{
    name: "Won Sul Coreano",
    abbreviation: "KRW",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/kr.gif",
    rate: 1127.79
},
{
    name: "Peso Argentino",
    abbreviation: "ARS",
    symbol: "$",
    flagURL: "https://img.geonames.org/flags/x/ar.gif",
    rate: 94.20
},
{
    name: "Dolar de Singapura",
    abbreviation: "SGD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/sg.gif",
    rate: 1.33
},
{
    name: "Pupia Indiana",
    abbreviation: "IDR",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/in.gif",
    rate: 72.91
},
{
    name: "Dolar Neozelandês",
    abbreviation: "NZD",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/nz.gif",
    rate: 1.39
},
{
    name: "Lira Turca",
    abbreviation: "TRY",
    symbol: "$",
    flagURL: "http://www.geonames.org/flags/l/tr.gif",
    rate: 8.42
},
];

// Eventos
addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event){
    addCurrencyBtn.classList.toggle("open");
}

// função que permite a adição de mais moedas na lista principal;
addCurrencyList.addEventListener("click", addCurrencyListClick);
function addCurrencyListClick(event) {
  const clickedListItem = event.target.closest("li");
  if(!clickedListItem.classList.contains("disabled")) {
    const newCurrency = currencies.find(c => c.abbreviation===clickedListItem.getAttribute("moeda-atual"));
    if(newCurrency) newCurrenciesListItem(newCurrency);
  }
}

// função que permite retirar uma moeda da lista principal;
currenciesList.addEventListener("click", currenciesListClick);
function currenciesListClick(event) {
  if(event.target.classList.contains("fechar")) {
    const parentNode = event.target.parentNode;
    parentNode.remove();
    addCurrencyList.querySelector(`[moeda-atual=${parentNode.id}]`).classList.remove("disabled");
    if(parentNode.classList.contains("moeda-atual")) {
      const newBaseCurrencyLI = currenciesList.querySelector(".moedas");
      if(newBaseCurrencyLI) {
        setNewBaseCurrency(newBaseCurrencyLI);
        baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector(".entrada input").value);
      }
    }
  }
}

//função que estabelece a moeda escolhida para ser a principal 
function setNewBaseCurrency(newBaseCurrencyLI) {
  newBaseCurrencyLI.classList.add("moeda-atual");
  baseCurrency = newBaseCurrencyLI.id;
  const baseCurrencyRate = currencies.find(currency => currency.abbreviation===baseCurrency).rate;
  currenciesList.querySelectorAll(".moedas").forEach(currencyLI => {
    const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
    const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
    currencyLI.querySelector(".base-moeda-taxa").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
  });
}

//currenciesListInputChange permite o inserir e faz o calculo em outras moedas (Ps:A propria conversão)
currenciesList.addEventListener("input", currenciesListInputChange);

function currenciesListInputChange(event){
    const isNewBaseCurrency = event.target.closest("li").id!==baseCurrency;
    if(isNewBaseCurrency){
        currenciesList.querySelector(`#${baseCurrency}`).classList.remove("moeda-atual");
        setNewBaseCurrency(event.target.closest("li"));
    }
    const newBaseCurrencyAmount = isNaN(event.target.value) ? 0 : Number(event.target.value);
    if(baseCurrencyAmount!==newBaseCurrencyAmount || isNewBaseCurrency){
        baseCurrencyAmount = newBaseCurrencyAmount;
        const baseCurrencyRate = currencies.find( currency => currency.abbreviation===baseCurrency).rate;
        currenciesList.querySelectorAll(".moedas").forEach(currencyLI => {
        if(currencyLI.id!==baseCurrency){
        const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
        const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".entrada input").value = exchangeRate*baseCurrencyAmount!==0 ? (exchangeRate*baseCurrencyAmount).toFixed(4) : "";
        }
        });
    }
}

currenciesList.addEventListener("focusout", currenciesListFocusOut);

function currenciesListFocusOut(event){
    const inputValue = event.target.value;
    if(isNaN(inputValue) || Number(inputValue)===0) event.target.value = "";
    else event.target.value = Number(inputValue).toFixed(4);
}

//função que encerra o inserir do valor da moeda caso a tecla "Enter" seja precionada
currenciesList.addEventListener("keydown", currenciesListKeyDown);

function currenciesListKeyDown(event) {
  if(event.key==="Enter") event.target.blur();
}

//Função Auxiliar 
// Função que impoem no botão adicionar todas as moedas da lista;
function populateaddCurrencyList(){
     for(let i=0;i<currencies.length;i++){
         addCurrencyList.insertAdjacentHTML(
             "beforeend",
             `<li moeda-atual=${currencies[i].abbreviation}>
             <img src=${currencies[i].flagURL} class="bandeira"><span>${currencies[i].abbreviation} - ${currencies[i].name}</span>
             </li>`);
     }
}
// Função que impoem as primeiras moedas que o Sistema vai começar;
function populateCurrenciesList() {
    for(let i=0; i<initiallyDisplayedCurrencies.length; i++) {
      const currency = currencies.find(c => c.abbreviation===initiallyDisplayedCurrencies[i]);
      if(currency) newCurrenciesListItem(currency);
    }
  }
  
  function newCurrenciesListItem(currency) {
    if(currenciesList.childElementCount===0) {
      baseCurrency = currency.abbreviation;
      baseCurrencyAmount = 0;
    }
    addCurrencyList.querySelector(`[moeda-atual=${currency.abbreviation}]`).classList.add("disabled");
    const baseCurrencyRate = currencies.find(c => c.abbreviation===baseCurrency).rate;
    const exchangeRate = currency.abbreviation===baseCurrency ? 1 : (currency.rate/baseCurrencyRate).toFixed(4);
    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount*exchangeRate).toFixed(4) : "";
  
    currenciesList.insertAdjacentHTML(
        "beforeend",
        `<li class="moedas ${currency.abbreviation===baseCurrency ? "moedas-moeda-base" : ""}" id=${currency.abbreviation}>
            <img src= ${currency.flagURL} class="bandeira">
             <div class="info">
                 <p class="entrada"> $ <span class="moeda-simbolo"></span><input placeholder="0.0000" value=${inputValue}></p>
                 <P class="nome-moeda">${currency.abbreviation} - ${currency.name}</P>
                 <p class="base-moeda-taxa">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
             </div>
             <span class="fechar">&times;</span>
        </li>`);
  }
  
  populateaddCurrencyList();
  populateCurrenciesList();
 

