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
    const ratio = document.getElementById("ratio").value.split(":")
    const cementRatio = parseFloat(ratio[0])
    const sandRatio = parseFloat(ratio[1])
    const aggregateRatio = parseFloat(ratio[2])

    // console.log(cementRatio);
    // console.log(sandRatio);
    // console.log(aggregateRatio);

    const areaInSquareFeet = parseFloat(area.value)
    const priceOfCementPer50Kg = parseFloat(cementPrice.value)
    const priceOfSandPer100Kg = parseFloat(sandPrice.value)
    const priceOfAggregatePer100Kg = parseFloat(aggregatePrice.value)
    const densityOfCementInKgPerCubicMeter = parseFloat(densityOfCement.value)
    const densityOfSandInKgPerCubicMeter = parseFloat(densityOfSand.value)
    const densityOfAggregateInKgPerCubicMeter = parseFloat(densityOfAggregate.value)
    const thicknessInInch = parseFloat(thicknessOfPCC.value)
    const wetVolumeInCubicFeet = (areaInSquareFeet * thicknessInInch) / 12
    const conversionFactorFromDrytoWet = 1.54
    const dryVolumeInCubicMeter = 0.0283168 * conversionFactorFromDrytoWet * wetVolumeInCubicFeet

    // ######################################################

    const cementQuantityForM15InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 7
    const sandQuantityForM15InKg = (2 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 7
    const aggregateQuantityForM15InKg = (4 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 7

    const cementBagsForM15 = Math.ceil(cementQuantityForM15InKg / 50)
    const sandQuantityInQuintalsForM15 = Math.ceil(sandQuantityForM15InKg / 100)
    const aggregateQuantityInQuintalsForM15 = Math.ceil(aggregateQuantityForM15InKg / 100)

    const finalPriceOfCementForM15 = cementBagsForM15 * priceOfCementPer50Kg
    const finalPriceOfSandForM15 = sandQuantityInQuintalsForM15 * priceOfSandPer100Kg
    const finalPriceOfAggregateForM15 = aggregateQuantityInQuintalsForM15 * priceOfAggregatePer100Kg

    // ######################################################

    const cementQuantityForM10InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 10
    const sandQuantityForM10InKg = (3 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 10
    const aggregateQuantityForM10InKg = (6 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 10

    const cementBagsForM10 = Math.ceil(cementQuantityForM10InKg / 50)
    const sandQuantityInQuintalsForM10 = Math.ceil(sandQuantityForM10InKg / 100)
    const aggregateQuantityInQuintalsForM10 = Math.ceil(aggregateQuantityForM10InKg / 100)

    const finalPriceOfCementForM10 = cementBagsForM10 * priceOfCementPer50Kg
    const finalPriceOfSandForM10 = sandQuantityInQuintalsForM10 * priceOfSandPer100Kg
    const finalPriceOfAggregateForM10 = aggregateQuantityInQuintalsForM10 * priceOfAggregatePer100Kg

    // ######################################################

    const cementQuantityForM7_5InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 13
    const sandQuantityForM7_5InKg = (4 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 13
    const aggregateQuantityForM7_5InKg = (8 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 13

    const cementBagsForM7_5 = Math.ceil(cementQuantityForM7_5InKg / 50)
    const sandQuantityInQuintalsForM7_5 = Math.ceil(sandQuantityForM7_5InKg / 100)
    const aggregateQuantityInQuintalsForM7_5 = Math.ceil(aggregateQuantityForM7_5InKg / 100)

    const finalPriceOfCementForM7_5 = cementBagsForM7_5 * priceOfCementPer50Kg
    const finalPriceOfSandForM7_5 = sandQuantityInQuintalsForM7_5 * priceOfSandPer100Kg
    const finalPriceOfAggregateForM7_5 = aggregateQuantityInQuintalsForM7_5 * priceOfAggregatePer100Kg

    // ###################################################

    const denominatorOfRatio = (cementRatio + sandRatio + aggregateRatio)
    const cementQuantityForCustomInKg = (cementRatio * dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / denominatorOfRatio
    const sandQuantityForCustomInKg = (sandRatio * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / denominatorOfRatio
    const aggregateQuantityForCustomInKg = (aggregateRatio * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / denominatorOfRatio

    const cementBagsForCustom = Math.ceil(cementQuantityForCustomInKg / 50)
    const sandQuantityInQuintalsForCustom = Math.ceil(sandQuantityForCustomInKg / 100)
    const aggregateQuantityInQuintalsForCustom = Math.ceil(aggregateQuantityForCustomInKg / 100)

    const finalPriceOfCementForCustom = cementBagsForCustom * priceOfCementPer50Kg
    const finalPriceOfSandForCustom = sandQuantityInQuintalsForCustom * priceOfSandPer100Kg
    const finalPriceOfAggregateForCustom = aggregateQuantityInQuintalsForCustom * priceOfAggregatePer100Kg

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
        <div>
            <h2>For Custom Ratio, the estimation for cement, sand and aggregate : INR 
            ${finalPriceOfCementForCustom + finalPriceOfSandForCustom + finalPriceOfAggregateForCustom}</h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForCustom} Bags</td>
                <td>${sandQuantityInQuintalsForCustom} Quintals</td>
                <td>${aggregateQuantityInQuintalsForCustom} Quintals</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForCustom}</td>
                <td>INR ${finalPriceOfSandForCustom}</td>
                <td>INR ${finalPriceOfAggregateForCustom}</td>
                </tr>
            </table>
        </div>
        `
});


