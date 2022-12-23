document.getElementById('form1').addEventListener('submit', function (evt) {

    evt.preventDefault();
    const areaInSquareFeet = parseFloat(document.getElementById("area").value)
    const thicknessOfPCC = parseFloat(document.getElementById("thicknessOfPCC").value)
    const priceOfCementPer50Kg = parseFloat(document.getElementById("cementPrice").value)
    const priceOfSandPer100Kg = parseFloat(document.getElementById("sandPrice").value)
    const priceOfAggregatePer100Kg = parseFloat(document.getElementById("aggregatePrice").value)

    const densityOfCement = document.getElementById("densityOfCement").value.split("-")
    const densityOfCementMin = parseFloat(densityOfCement[0])
    const densityOfCementMax = parseFloat(densityOfCement[1])

    const densityOfSand = document.getElementById("densityOfSand").value.split("-")
    const densityOfSandMin = parseFloat(densityOfSand[0])
    const densityOfSandMax = parseFloat(densityOfSand[1])

    const densityOfAggregate = document.getElementById("densityOfAggregate").value.split("-")
    const densityOfAggregateMin = parseFloat(densityOfAggregate[0])
    const densityOfAggregateMax = parseFloat(densityOfAggregate[1])

    const ratio = document.getElementById("ratio").value.split(":")
    const cementRatio = parseFloat(ratio[0])
    const sandRatio = parseFloat(ratio[1])
    const aggregateRatio = parseFloat(ratio[2])
    const wetVolumeInCubicFeet = parseFloat((areaInSquareFeet * thicknessOfPCC) / 12)
    const conversionFactorFromDrytoWet = 1.54
    const dryVolumeInCubicMeter = 0.0283168 * conversionFactorFromDrytoWet * wetVolumeInCubicFeet

    const denominatorOfRatio = (cementRatio + sandRatio + aggregateRatio)

    const cementQuantityForCustomInKgMin = (cementRatio * dryVolumeInCubicMeter * densityOfCementMin) / denominatorOfRatio
    const cementQuantityForCustomInKgMax = (cementRatio * dryVolumeInCubicMeter * densityOfCementMax) / denominatorOfRatio

    const sandQuantityForCustomInKgMin = (sandRatio * dryVolumeInCubicMeter * densityOfSandMin) / denominatorOfRatio
    const sandQuantityForCustomInKgMax = (sandRatio * dryVolumeInCubicMeter * densityOfSandMax) / denominatorOfRatio

    const aggregateQuantityForCustomInKgMin = (aggregateRatio * dryVolumeInCubicMeter * densityOfAggregateMin) / denominatorOfRatio
    const aggregateQuantityForCustomInKgMax = (aggregateRatio * dryVolumeInCubicMeter * densityOfAggregateMax) / denominatorOfRatio

    const cementBagsForCustomExactMin = +(cementQuantityForCustomInKgMin / 50).toFixed(3)
    const cementBagsForCustomMin = Math.ceil(cementBagsForCustomExactMin)
    const sandQuantityInQuintalsForCustomExactMin = +(sandQuantityForCustomInKgMin / 100).toFixed(3)
    const sandQuantityInQuintalsForCustomMin = Math.ceil(sandQuantityInQuintalsForCustomExactMin)
    const aggregateQuantityInQuintalsForCustomExactMin = +(aggregateQuantityForCustomInKgMin / 100).toFixed(3)
    const aggregateQuantityInQuintalsForCustomMin = Math.ceil(aggregateQuantityInQuintalsForCustomExactMin)

    const cementBagsForCustomExactMax = +(cementQuantityForCustomInKgMax / 50).toFixed(3)
    const cementBagsForCustomMax = Math.ceil(cementBagsForCustomExactMax)
    const sandQuantityInQuintalsForCustomExactMax = +(sandQuantityForCustomInKgMax / 100).toFixed(3)
    const sandQuantityInQuintalsForCustomMax = Math.ceil(sandQuantityInQuintalsForCustomExactMax)
    const aggregateQuantityInQuintalsForCustomExactMax = +(aggregateQuantityForCustomInKgMax / 100).toFixed(3)
    const aggregateQuantityInQuintalsForCustomMax = Math.ceil(aggregateQuantityInQuintalsForCustomExactMax)

    const finalPriceOfCementForCustomMin = cementBagsForCustomMin * priceOfCementPer50Kg
    const finalPriceOfCementForCustomExactMin = +(cementBagsForCustomExactMin * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForCustomMin = sandQuantityInQuintalsForCustomMin * priceOfSandPer100Kg
    const finalPriceOfSandForCustomExactMin = +(sandQuantityInQuintalsForCustomExactMin * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfAggregateForCustomMin = aggregateQuantityInQuintalsForCustomMin * priceOfAggregatePer100Kg
    const finalPriceOfAggregateForCustomExactMin = +(aggregateQuantityInQuintalsForCustomExactMin * priceOfAggregatePer100Kg).toFixed(3)

    const finalPriceOfCementForCustomMax = cementBagsForCustomMax * priceOfCementPer50Kg
    const finalPriceOfCementForCustomExactMax = +(cementBagsForCustomExactMax * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForCustomMax = sandQuantityInQuintalsForCustomMax * priceOfSandPer100Kg
    const finalPriceOfSandForCustomExactMax = +(sandQuantityInQuintalsForCustomExactMax * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfAggregateForCustomMax = aggregateQuantityInQuintalsForCustomMax * priceOfAggregatePer100Kg
    const finalPriceOfAggregateForCustomExactMax = +(aggregateQuantityInQuintalsForCustomExactMax * priceOfAggregatePer100Kg).toFixed(3)

    const output = document.getElementById("answer");
    output.innerHTML =
        `
        <div>
            <h2>For Custom Ratio, the estimation for cement, sand and aggregate (taking min density) : INR 
            ${finalPriceOfCementForCustomMin + finalPriceOfSandForCustomMin + finalPriceOfAggregateForCustomMin} ( precisely : INR ${(finalPriceOfCementForCustomExactMin + finalPriceOfSandForCustomExactMin + finalPriceOfAggregateForCustomExactMin).toFixed(2)} ) </h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForCustomMin} Bags ( ${cementBagsForCustomExactMin} )</td>
                <td>${sandQuantityInQuintalsForCustomMin} Quintals ( ${sandQuantityInQuintalsForCustomExactMin} )</td>
                <td>${aggregateQuantityInQuintalsForCustomMin} Quintals ( ${aggregateQuantityInQuintalsForCustomExactMin} )</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForCustomMin} (Exact Price:  INR ${finalPriceOfCementForCustomExactMin})</td>
                <td>INR ${finalPriceOfSandForCustomMin} (Exact Price:  INR ${finalPriceOfSandForCustomExactMin})</td>
                <td>INR ${finalPriceOfAggregateForCustomMin} (Exact Price:  INR ${finalPriceOfAggregateForCustomExactMin})</td>
                </tr>
            </table>
        </div>
        <div>
            <h2>For Custom Ratio, the estimation for cement, sand and aggregate (taking max density) : INR 
            ${finalPriceOfCementForCustomMax + finalPriceOfSandForCustomMax + finalPriceOfAggregateForCustomMax} ( precisely : INR ${(finalPriceOfCementForCustomExactMax + finalPriceOfSandForCustomExactMax + finalPriceOfAggregateForCustomExactMax).toFixed(2)} ) </h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                <th>Aggregate</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForCustomMax} Bags ( ${cementBagsForCustomExactMax} )</td>
                <td>${sandQuantityInQuintalsForCustomMax} Quintals ( ${sandQuantityInQuintalsForCustomExactMax} )</td>
                <td>${aggregateQuantityInQuintalsForCustomMax} Quintals ( ${aggregateQuantityInQuintalsForCustomExactMax} )</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForCustomMax} (Exact Price:  INR ${finalPriceOfCementForCustomExactMax})</td>
                <td>INR ${finalPriceOfSandForCustomMax} (Exact Price:  INR ${finalPriceOfSandForCustomExactMax})</td>
                <td>INR ${finalPriceOfAggregateForCustomMax} (Exact Price:  INR ${finalPriceOfAggregateForCustomExactMax})</td>
                </tr>
            </table>
        </div>
        `
});


