// ============ INPUTS ============ 
const temperatureInput = document.getElementById("temperature"); // Input numérico de temperatura
const initialUnit = document.getElementById("initialUnit");  // Input com o seletor de unidades para converter
const finalUnit = document.getElementById("finalUnit");   // Input que determina a unidade final
const submitBtn = document.getElementById("submitBtn");  // Botão de envio
const result = document.getElementById("result");  // Local onde se mostra o resultado


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
        return `${temperature * 1.8 + 32} °F`;
    
    // Se for Celsius -> Kelvin
    } else if (targetUnit === "K") {
        return `${temperature + 273} K`;
    
    // Se for Celsius -> Celsius, retorne o mesmo valor
    } else {
        return `${temperature} °C`;

    }
}

function convertFahrenheit(temperature, targetUnit) {
    // Se for Fahrenheit -> Celsius
    if (targetUnit === "C") {
        return `${(temperature - 32) / 1.8} °C`;
    
    // Se for Fahrenheit -> Kelvin
    } else if (targetUnit === "K") {
        return `${(temperature - 32) * (5 / 9) + 273} K`;
    
    // Se for Fahrenheit -> Fahrenheit, retorne o mesmo valor
    } else {
        return `${temperature} °F`;

    }
}

function convertKelvin(temperature, targetUnit) {
    // Se for Kelvin -> Celsius
    if (targetUnit === "C") {
        return `${temperature - 273} °C`;
    
    // Se for Kelvin -> Fahrenheit
    } else if (targetUnit === "F") {
        return `${(temperature - 273) * 1.8 + 32} °F`;
    
    // Se for Kelvin -> Kelvin, retorne o mesmo valor
    } else {
        return `${temperature} K`;

    }
}