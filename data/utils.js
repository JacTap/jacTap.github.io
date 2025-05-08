function calculate() {

    //grab D3, D4, D5 vals from user input
    var D3 = $("#D3").val() || 8199996
    var D4 = $("#D4").val() || 0.0261
    var D5 = $("#D5").val() || 131

    // Step 1: Calculate D7, E7, F7
    const D7 = D3 * D4;
    const E7 = D7 / (0.8087 + 0.0275);
    const F7 = (E7 - D7) / D7;

    // Step 2: D6 = D7 * D5
    const D6 = D7 * D5;

    // Step 3: Intermediate values for D17-D19
    const D18 = D7 * 0.9671;
    const D17 = D5 / (0.9671 + 0.0329 * 1.14627499202872);
    const D19 = D18 * D17;

    // Step 4: Intermediate values for E17-E19
    const E17 = D17 * 1.14627499202872;
    const E18 = D7 * 0.0329;
    const E19 = E18 * E17;

    // Step 5: Intermediate values for F17-F19
    const F17 = D17 * 1.13732545295948;
    const F18 = E7 * 0.0373;
    const F19 = F18 * F17;

    // Step 6: Intermediate values for G17-G19
    const G17 = D17 * 1.17380207895007;
    const G18 = E7 * 0.0702;
    const G19 = G18 * G17;

    // Step 7: Intermediate values for H17-H19
    const H17 = D17 * 1.19238960001171;
    const H18 = E7 * 0.0226;
    const H19 = H18 * H17;

    // Step 8: Intermediate values for I17-I19
    const I17 = D17 * 1.05212748463104;
    const I18 = E7 * 0.0337;
    const I19 = I18 * I17;

    // Step 9: E6 = sum of row 19 values
    const E6 = D19 + E19 + F19 + G19 + H19 + I19;

    // Step 10: F6 = (E6 - D6) / D6
    const F6 = (E6 - D6) / D6;

    // Step 11: D8, E8, F8
    const D8 = D5;
    const E8 = E6 / E7;
    const F8 = (E8 - D8) / D8;

    // Formatters
    const formatUSD = (value) =>
        `$${Math.round(value).toLocaleString("en-US")}`;

    const formatNumber = (value) =>
        `${Math.round(value).toLocaleString("en-US")}`;

    const formatPercent = (value) =>
        `${(value * 100).toFixed(2)}%`;

    // Return formatted results
    return {
        D6: formatUSD(D6),
        D7: formatNumber(D7),
        D8: formatUSD(D8),
        E6: formatUSD(E6),
        E7: formatNumber(E7),
        E8: formatUSD(E8),
        F6: formatPercent(F6),
        F7: formatPercent(F7),
        F8: formatPercent(F8),
    };
}


var calculated_results = calculate()
console.log(calculated_results)