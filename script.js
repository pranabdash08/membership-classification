function classifyMembership() {
    const milesRange = document.getElementById("miles").value;
    const amountRange = document.getElementById("amount").value;
    const flightsRange = document.getElementById("flights").value;
    const yearsRange = document.getElementById("years").value;

    const miles = convertToMidpoint(milesRange);
    const amountSpent = convertToMidpoint(amountRange);
    const flights = convertToMidpoint(flightsRange);
    const years = convertToMidpoint(yearsRange);

    let membership = "Silver";
    let perks = "Standard baggage allowance, No upgrade";

    if (miles >= 50000 && amountSpent >= 5000 && flights >= 30 && years >= 10) {
        membership = "Emerald";
        perks = "2 bags free, Free upgrade to 1st class";
    } else if (miles >= 30000 && amountSpent >= 3000 && flights >= 20 && years >= 5) {
        membership = "Diamond";
        perks = "1 bag free, Upgrade to business class";
    } else if (miles >= 15000 && amountSpent >= 1500 && flights >= 10 && years >= 3) {
        membership = "Gold";
        perks = "1 bag free, Discounted upgrade to business class";
    }

    document.getElementById("result").innerText = `Membership Tier: ${membership}
Perks: ${perks}`;
}

function convertToMidpoint(rangeStr) {
    const [low, high] = rangeStr.replace('+', '').split('-').map(Number);
    return (low + high) / 2;
}
