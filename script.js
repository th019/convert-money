const button = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")


function convertValue(){
    const value = document.querySelector("input").value
    const valueToConvert = document.querySelector(".currency-value")
    const valueConverted = document.querySelector(".currency-value-converted")
    
    
    const dolarToday = 5.13
    const euroToday = 5.45
    const libraToday = 6.45

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(value)

    if(currencySelect.value=="dolar"){
    
        valueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(value / dolarToday)
    }

    if(currencySelect.value=="euro"){

        valueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(value / euroToday)
    }  

    if(currencySelect.value=="libra"){

        valueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(value / libraToday)
    }

    
}

function currencyChange(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".img-currency")


    if(currencySelect.value=="dolar"){
        
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if(currencySelect.value=="euro"){

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value=="libra"){

        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libra 1.png"
    }

    convertValue()
}

currencySelect.addEventListener("change",currencyChange)
button.addEventListener("click", convertValue)