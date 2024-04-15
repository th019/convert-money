const button = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")


function convertValue(){
    const value = document.querySelector("input").value
    const valueToConvert = document.querySelector(".currency-value")
    const valueConverted = document.querySelector(".currency-value-converted")
    
    
    const dolarToday = 5.13
    const euroToday = 5.45

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

    convertValue()
}

currencySelect.addEventListener("change",currencyChange)
button.addEventListener("click", convertValue)