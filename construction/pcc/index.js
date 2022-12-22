document.getElementById('form1').addEventListener('submit', function (evt) {

    evt.preventDefault();
    const area = document.getElementById("area")
    const thicknessOfPCC = document.getElementById("thicknessOfPCC")
    const cementPrice = document.getElementById("cementPrice")
    const sandPrice = document.getElementById("sandPrice")
    const aggregatePrice = document.getElementById("aggregatePrice")
    const densityOfCement = document.getElementById("densityOfCement")
    const densityOfSand = document.getElementById("densityOfSand")
    const densityOfAggregate = document.getElementById("densityOfAggregate")

    let areaInSquareFeet = area.value
    let priceOfCementPer50Kg = cementPrice.value
    let priceOfSandPer100Kg = sandPrice.value
    let priceOfAggregatePer100Kg = aggregatePrice.value
    let densityOfCementInKgPerCubicMeter = densityOfCement.value
    let densityOfSandInKgPerCubicMeter = densityOfSand.value
    let densityOfAggregateInKgPerCubicMeter = densityOfAggregate.value
    let thicknessInInch = thicknessOfPCC.value
    let wetVolumeInCubicFeet = (areaInSquareFeet * thicknessInInch) / 12
    const conversionFactorFromDrytoWet = 1.54
    let dryVolumeInCubicMeter = 0.0283168 * conversionFactorFromDrytoWet * wetVolumeInCubicFeet

    // ######################################################

    let cementQuantityForM15InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 7
    let sandQuantityForM15InKg = (2 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 7
    let aggregateQuantityForM15InKg = (4 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 7

    let cementBagsForM15 = Math.ceil(cementQuantityForM15InKg / 50)
    let sandQuantityInQuintalsForM15 = Math.ceil(sandQuantityForM15InKg / 100)
    let aggregateQuantityInQuintalsForM15 = Math.ceil(aggregateQuantityForM15InKg / 100)

    let finalPriceOfCementForM15 = cementBagsForM15 * priceOfCementPer50Kg
    let finalPriceOfSandForM15 = sandQuantityInQuintalsForM15 * priceOfSandPer100Kg
    let finalPriceOfAggregateForM15 = aggregateQuantityInQuintalsForM15 * priceOfAggregatePer100Kg

    // ######################################################

    let cementQuantityForM10InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 10
    let sandQuantityForM10InKg = (3 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 10
    let aggregateQuantityForM10InKg = (6 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 10

    let cementBagsForM10 = Math.ceil(cementQuantityForM10InKg / 50)
    let sandQuantityInQuintalsForM10 = Math.ceil(sandQuantityForM10InKg / 100)
    let aggregateQuantityInQuintalsForM10 = Math.ceil(aggregateQuantityForM10InKg / 100)

    let finalPriceOfCementForM10 = cementBagsForM10 * priceOfCementPer50Kg
    let finalPriceOfSandForM10 = sandQuantityInQuintalsForM10 * priceOfSandPer100Kg
    let finalPriceOfAggregateForM10 = aggregateQuantityInQuintalsForM10 * priceOfAggregatePer100Kg

    // ######################################################

    let cementQuantityForM7_5InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 13
    let sandQuantityForM7_5InKg = (4 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 13
    let aggregateQuantityForM7_5InKg = (8 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 13

    let cementBagsForM7_5 = Math.ceil(cementQuantityForM7_5InKg / 50)
    let sandQuantityInQuintalsForM7_5 = Math.ceil(sandQuantityForM7_5InKg / 100)
    let aggregateQuantityInQuintalsForM7_5 = Math.ceil(aggregateQuantityForM7_5InKg / 100)

    let finalPriceOfCementForM7_5 = cementBagsForM7_5 * priceOfCementPer50Kg
    let finalPriceOfSandForM7_5 = sandQuantityInQuintalsForM7_5 * priceOfSandPer100Kg
    let finalPriceOfAggregateForM7_5 = aggregateQuantityInQuintalsForM7_5 * priceOfAggregatePer100Kg

    ///////////////////////// CONSOLE LOGS  ///////////////////////////

    const output = document.getElementById("answer");
    output.innerHTML =
        `
        <div>
            <h2>For M7.5 1:4:8, the estimation for cement, sand and aggregate : INR ${finalPriceOfCementForM7_5 + finalPriceOfSandForM7_5 + finalPriceOfAggregateForM7_5}</h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForM7_5} Bags</td>
                <td>${sandQuantityInQuintalsForM7_5} Quintals</td>
                <td>${aggregateQuantityInQuintalsForM7_5} Quintals</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForM7_5}</td>
                <td>INR ${finalPriceOfSandForM7_5}</td>
                <td>INR ${finalPriceOfAggregateForM7_5}</td>
                </tr>
            </table> 
        </div>
        <div>
            <h2>For M10 1:3:6, the estimation for cement, sand and aggregate : INR ${finalPriceOfCementForM10 + finalPriceOfSandForM10 + finalPriceOfAggregateForM10}</h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForM10} Bags</td>
                <td>${sandQuantityInQuintalsForM10} Quintals</td>
                <td>${aggregateQuantityInQuintalsForM10} Quintals</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForM10}</td>
                <td>INR ${finalPriceOfSandForM10}</td>
                <td>INR ${finalPriceOfAggregateForM10}</td>
                </tr>
            </table>
        </div>
        <div>
            <h2>For M15 1:2:4, the estimation for cement, sand and aggregate : INR 
            ${finalPriceOfCementForM15 + finalPriceOfSandForM15 + finalPriceOfAggregateForM15}</h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForM15} Bags</td>
                <td>${sandQuantityInQuintalsForM15} Quintals</td>
                <td>${aggregateQuantityInQuintalsForM15} Quintals</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForM15}</td>
                <td>INR ${finalPriceOfSandForM15}</td>
                <td>INR ${finalPriceOfAggregateForM15}</td>
                </tr>
            </table>
        </div>
        `
});


