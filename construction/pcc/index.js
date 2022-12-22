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
    const wetVolumeInCubicFeet = parseFloat((areaInSquareFeet * thicknessInInch) / 12)
    const conversionFactorFromDrytoWet = 1.54
    const dryVolumeInCubicMeter = 0.0283168 * conversionFactorFromDrytoWet * wetVolumeInCubicFeet

    // ######################################################

    const cementQuantityForM15InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 7
    const sandQuantityForM15InKg = (2 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 7
    const aggregateQuantityForM15InKg = (4 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 7

    const cementBagsForM15Exact = +(cementQuantityForM15InKg / 50).toFixed(3)
    const cementBagsForM15 = Math.ceil(cementBagsForM15Exact)

    const sandQuantityInQuintalsForM15Exact = +(sandQuantityForM15InKg / 100).toFixed(3)
    const sandQuantityInQuintalsForM15 = Math.ceil(sandQuantityInQuintalsForM15Exact)

    const aggregateQuantityInQuintalsForM15Exact = +(aggregateQuantityForM15InKg / 100).toFixed(3)
    const aggregateQuantityInQuintalsForM15 = Math.ceil(aggregateQuantityInQuintalsForM15Exact)

    const finalPriceOfCementForM15 = cementBagsForM15 * priceOfCementPer50Kg
    const finalPriceOfCementForM15Exact = +(cementBagsForM15Exact * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForM15 = sandQuantityInQuintalsForM15 * priceOfSandPer100Kg
    const finalPriceOfSandForM15Exact = +(sandQuantityInQuintalsForM15Exact * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfAggregateForM15 = aggregateQuantityInQuintalsForM15 * priceOfAggregatePer100Kg
    const finalPriceOfAggregateForM15Exact = +(aggregateQuantityInQuintalsForM15Exact * priceOfAggregatePer100Kg).toFixed(3)

    // ######################################################

    const cementQuantityForM10InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 10
    const sandQuantityForM10InKg = (3 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 10
    const aggregateQuantityForM10InKg = (6 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 10

    const cementBagsForM10Exact = +(cementQuantityForM10InKg / 50).toFixed(3)
    const cementBagsForM10 = Math.ceil(cementBagsForM10Exact)

    const sandQuantityInQuintalsForM10Exact = +(sandQuantityForM10InKg / 100).toFixed(3)
    const sandQuantityInQuintalsForM10 = Math.ceil(sandQuantityInQuintalsForM10Exact)

    const aggregateQuantityInQuintalsForM10Exact = +(aggregateQuantityForM10InKg / 100).toFixed(3)
    const aggregateQuantityInQuintalsForM10 = Math.ceil(aggregateQuantityInQuintalsForM10Exact)

    const finalPriceOfCementForM10 = cementBagsForM10 * priceOfCementPer50Kg
    const finalPriceOfCementForM10Exact = +(cementBagsForM10Exact * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForM10 = sandQuantityInQuintalsForM10 * priceOfSandPer100Kg
    const finalPriceOfSandForM10Exact = +(sandQuantityInQuintalsForM10Exact * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfAggregateForM10 = aggregateQuantityInQuintalsForM10 * priceOfAggregatePer100Kg
    const finalPriceOfAggregateForM10Exact = +(aggregateQuantityInQuintalsForM10Exact * priceOfAggregatePer100Kg).toFixed(3)

    // ######################################################

    const cementQuantityForM7_5InKg = (dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / 13
    const sandQuantityForM7_5InKg = (4 * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / 13
    const aggregateQuantityForM7_5InKg = (8 * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / 13

    const cementBagsForM7_5Exact = +(cementQuantityForM7_5InKg / 50).toFixed(3)
    const cementBagsForM7_5 = Math.ceil(cementBagsForM7_5Exact)

    const sandQuantityInQuintalsForM7_5Exact = +(sandQuantityForM7_5InKg / 100).toFixed(3)
    const sandQuantityInQuintalsForM7_5 = Math.ceil(sandQuantityInQuintalsForM7_5Exact)

    const aggregateQuantityInQuintalsForM7_5Exact = +(aggregateQuantityForM7_5InKg / 100).toFixed(3)
    const aggregateQuantityInQuintalsForM7_5 = Math.ceil(aggregateQuantityInQuintalsForM7_5Exact)

    const finalPriceOfCementForM7_5 = cementBagsForM7_5 * priceOfCementPer50Kg
    const finalPriceOfCementForM7_5Exact = +(cementBagsForM7_5Exact * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForM7_5 = sandQuantityInQuintalsForM7_5 * priceOfSandPer100Kg
    const finalPriceOfSandForM7_5Exact = +(sandQuantityInQuintalsForM7_5Exact * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfAggregateForM7_5 = aggregateQuantityInQuintalsForM7_5 * priceOfAggregatePer100Kg
    const finalPriceOfAggregateForM7_5Exact = +(aggregateQuantityInQuintalsForM7_5Exact * priceOfAggregatePer100Kg).toFixed(3)

    // ###################################################

    const denominatorOfRatio = (cementRatio + sandRatio + aggregateRatio)
    const cementQuantityForCustomInKg = (cementRatio * dryVolumeInCubicMeter * densityOfCementInKgPerCubicMeter) / denominatorOfRatio
    const sandQuantityForCustomInKg = (sandRatio * dryVolumeInCubicMeter * densityOfSandInKgPerCubicMeter) / denominatorOfRatio
    const aggregateQuantityForCustomInKg = (aggregateRatio * dryVolumeInCubicMeter * densityOfAggregateInKgPerCubicMeter) / denominatorOfRatio

    const cementBagsForCustomExact = +(cementQuantityForCustomInKg / 50).toFixed(3)
    const cementBagsForCustom = Math.ceil(cementBagsForCustomExact)
    const sandQuantityInQuintalsForCustomExact = +(sandQuantityForCustomInKg / 100).toFixed(3)
    const sandQuantityInQuintalsForCustom = Math.ceil(sandQuantityInQuintalsForCustomExact)
    const aggregateQuantityInQuintalsForCustomExact = +(aggregateQuantityForCustomInKg / 100).toFixed(3)
    const aggregateQuantityInQuintalsForCustom = Math.ceil(aggregateQuantityInQuintalsForCustomExact)

    const finalPriceOfCementForCustom = cementBagsForCustom * priceOfCementPer50Kg
    const finalPriceOfCementForCustomExact = +(cementBagsForCustomExact * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForCustom = sandQuantityInQuintalsForCustom * priceOfSandPer100Kg
    const finalPriceOfSandForCustomExact = +(sandQuantityInQuintalsForCustomExact * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfAggregateForCustom = aggregateQuantityInQuintalsForCustom * priceOfAggregatePer100Kg
    const finalPriceOfAggregateForCustomExact = +(aggregateQuantityInQuintalsForCustomExact * priceOfAggregatePer100Kg).toFixed(3)

    const output = document.getElementById("answer");
    output.innerHTML =
        `
        <div>
            <h2>For M7.5 1:4:8, the estimation for cement, sand and aggregate : INR ${finalPriceOfCementForM7_5 + finalPriceOfSandForM7_5 + finalPriceOfAggregateForM7_5} ( precisely : INR ${(finalPriceOfCementForM7_5Exact + finalPriceOfSandForM7_5Exact + finalPriceOfAggregateForM7_5Exact).toFixed(2)} ) </h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForM7_5} Bags ( ${cementBagsForM7_5Exact} )</td>
                <td>${sandQuantityInQuintalsForM7_5} Quintals ( ${sandQuantityInQuintalsForM7_5Exact} )</td>
                <td>${aggregateQuantityInQuintalsForM7_5} Quintals ( ${aggregateQuantityInQuintalsForM7_5Exact} )</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForM7_5} (Exact Price:  INR ${finalPriceOfCementForM7_5Exact})</td>
                <td>INR ${finalPriceOfSandForM7_5} (Exact Price:  INR ${finalPriceOfSandForM7_5Exact})</td>
                <td>INR ${finalPriceOfAggregateForM7_5} (Exact Price:  INR ${finalPriceOfAggregateForM7_5Exact})</td>
                </tr>
            </table> 
        </div>
        <div>
            <h2>For M10 1:3:6, the estimation for cement, sand and aggregate : INR ${finalPriceOfCementForM10 + finalPriceOfSandForM10 + finalPriceOfAggregateForM10} ( precisely : INR ${(finalPriceOfCementForM10Exact + finalPriceOfSandForM10Exact + finalPriceOfAggregateForM10Exact).toFixed(2)} ) </h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForM10} Bags ( ${cementBagsForM10Exact} )</td>
                <td>${sandQuantityInQuintalsForM10} Quintals ( ${sandQuantityInQuintalsForM10Exact} )</td>
                <td>${aggregateQuantityInQuintalsForM10} Quintals ( ${aggregateQuantityInQuintalsForM10Exact} )</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForM10} (Exact Price:  INR ${finalPriceOfCementForM10Exact})</td>
                <td>INR ${finalPriceOfSandForM10} (Exact Price:  INR ${finalPriceOfSandForM10Exact})</td>
                <td>INR ${finalPriceOfAggregateForM10} (Exact Price:  INR ${finalPriceOfAggregateForM10Exact})</td>
                </tr>
            </table>
        </div>
        <div>
            <h2>For M15 1:2:4, the estimation for cement, sand and aggregate : INR 
            ${finalPriceOfCementForM15 + finalPriceOfSandForM15 + finalPriceOfAggregateForM15} ( precisely : INR ${(finalPriceOfCementForM15Exact + finalPriceOfSandForM15Exact + finalPriceOfAggregateForM15Exact).toFixed(2)} ) </h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForM15} Bags ( ${cementBagsForM15Exact} )</td>
                <td>${sandQuantityInQuintalsForM15} Quintals ( ${sandQuantityInQuintalsForM15Exact} )</td>
                <td>${aggregateQuantityInQuintalsForM15} Quintals ( ${aggregateQuantityInQuintalsForM15Exact} )</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForM15} (Exact Price:  INR ${finalPriceOfCementForM15Exact})</td>
                <td>INR ${finalPriceOfSandForM15} (Exact Price:  INR ${finalPriceOfSandForM15Exact})</td>
                <td>INR ${finalPriceOfAggregateForM15} (Exact Price:  INR ${finalPriceOfAggregateForM15Exact})</td>
                </tr>
            </table>
        </div>
        <div>
            <h2>For Custom Ratio, the estimation for cement, sand and aggregate : INR 
            ${finalPriceOfCementForCustom + finalPriceOfSandForCustom + finalPriceOfAggregateForCustom} ( precisely : INR ${(finalPriceOfCementForCustomExact + finalPriceOfSandForCustomExact + finalPriceOfAggregateForCustomExact).toFixed(2)} ) </h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForCustom} Bags ( ${cementBagsForCustomExact} )</td>
                <td>${sandQuantityInQuintalsForCustom} Quintals ( ${sandQuantityInQuintalsForCustomExact} )</td>
                <td>${aggregateQuantityInQuintalsForCustom} Quintals ( ${aggregateQuantityInQuintalsForCustomExact} )</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForCustom} (Exact Price:  INR ${finalPriceOfCementForCustomExact})</td>
                <td>INR ${finalPriceOfSandForCustom} (Exact Price:  INR ${finalPriceOfSandForCustomExact})</td>
                <td>INR ${finalPriceOfAggregateForCustom} (Exact Price:  INR ${finalPriceOfAggregateForCustomExact})</td>
                </tr>
            </table>
        </div>
        `
});


