function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Replace the following conversion rates with actual exchange rates
    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.72,
        // Add more conversion rates as needed
    };

    const result = (amount * conversionRates[toCurrency]) / conversionRates[fromCurrency];

    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
