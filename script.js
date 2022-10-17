const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const currencyValueText = document.getElementById('currency-value-text')

const dolar = 5.33
const euro = 5.19


const convertValues = () =>{
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputReais)

    if(select.value === 'US$ Dólar Americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inputReais / dolar)
    } else{
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(inputReais / euro)
    }
}


changeCurrency = () =>{
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './Assets/europa.svg'
        currencyValueText.innerHTML = '€ 2.000,00'
    } else{
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './Assets/estados-unidos.svg'
        currencyValueText.innerHTML = 'US$ 2.000,00'
    }

    convertValues()
}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)