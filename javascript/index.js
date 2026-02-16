// ============ INPUTS ============ 
const temperatureInput = document.getElementById("temperature");
const initialUnit = document.getElementById("initialUnit");
const finalUnit = document.getElementById("finalUnit"); 
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result")


submitBtn.addEventListener("click", function() {
    let temperature = Number(temperatureInput.value); // Valor da temperatura para converter
    let selectedUnit = initialUnit.value; // Unidade especificada como inicial
    let targetUnit = finalUnit.value; // Unidade especificada como final

    // Convertendo Celsius
    if (selectedUnit === "C") {
        result.textContent = convertCelsius(temperature, targetUnit);
    
    // Convertendo Fahrenheit
    } else if (selectedUnit === "F") {
        result.textContent = convertFahrenheit(temperature, targetUnit);
    
    // Convertendo Kelvin
    } else {
        result.textContent = convertKelvin(temperature, targetUnit)

    }
})


function convertCelsius(temperature, targetUnit) {
    // Se for Celsius -> Fahrenheit
    if (targetUnit === "F") {
        return temperature * 1.8 + 32;
    
    // Se for Celsius -> Kelvin
    } else if (targetUnit === "K") {
        return temperature + 273;
    
    // Se for Celsius -> Celsius, retorne o mesmo valor
    } else {
        return temperature;

    }
}

function convertFahrenheit(temperature, targetUnit) {
    // Se for Fahrenheit -> Celsius
    if (targetUnit === "C") {
        return (temperature - 32) / 1.8;
    
    // Se for Fahrenheit -> Kelvin
    } else if (targetUnit === "K") {
        return (temperature - 32) * (5 / 9) + 273;
    
    // Se for Fahrenheit -> Fahrenheit, retorne o mesmo valor
    } else {
        return temperature;

    }
}

function convertKelvin(temperature, targetUnit) {
    // Se for Kelvin -> Celsius
    if (targetUnit === "C") {
        return temperature - 273;
    
    // Se for Kelvin -> Fahrenheit
    } else if (targetUnit === "F") {
        return (temperature - 273) * 1.8 + 32;
    
    // Se for Kelvin -> Kelvin, retorne o mesmo valor
    } else {
        return temperature;

    }
}