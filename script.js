const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const currencyValueText = document.getElementById('currency-value-text')



const convertValues = async () =>{
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

    console.log(data)

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputReais)

    if(select.value === 'US$ Dólar Americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inputReais / dolar)
    } else if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(inputReais / euro)
    } else{
        currencyValueText.innerHTML = bitcoin * inputReais
    }
}


changeCurrency = () =>{
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './Assets/europa.svg'
        currencyValueText.innerHTML = '€ 2.000,00'
    } else if(select.value === 'US$ Dólar Americano'){
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './Assets/estados-unidos.svg'
        currencyValueText.innerHTML = 'US$ 2.000,00'
    } else{
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './Assets/bitcoin.svg'
        currencyValueText.innerHTML = '0,097'
    }

    convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)