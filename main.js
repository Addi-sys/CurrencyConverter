const exchangeRate = 23000

let amount = 0

let currency = prompt("Would you like VND or USD")

function vndToUsd(vndAmount) {
    amount = (vndAmount / exchangeRate).toFixed(2)
    return amount
}

function usdToVnd(usdAmount) {
    amount = usdAmount * exchangeRate
    return amount
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}


if (currency.toLowerCase() === 'usd') {
    let vndAmount = prompt("How much VND do you have?")

    if (isNaN(vndAmount) === false) {
        vndAmount = (vndToUsd(vndAmount))
        console.log(formatCurrency("USD", vndAmount))
    } else {
        console.log("Value must be a number")
    }
} else if (currency.toLowerCase() === "vnd") {
    let usdAmount = prompt("How much USD do you have?")

    if (isNaN(usdAmount) === false) {
        usdAmount = (usdToVnd(usdAmount))
        console.log(formatCurrency("VND", usdAmount))
    } else {
        console.log("Value must be a number")
    }
} else {
    console.log("Please enter VND or USD")
}