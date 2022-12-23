document.getElementById('form1').addEventListener('submit', function (evt) {

    evt.preventDefault();
    const areaInSquareFeet = parseFloat(document.getElementById("area").value)
    const brickLength = parseFloat(document.getElementById("brickLength").value)
    const brickWidth = parseFloat(document.getElementById("brickWidth").value)
    const brickHeight = parseFloat(document.getElementById("brickHeight").value)
    const priceOfCementPer50Kg = parseFloat(document.getElementById("cementPrice").value)
    const priceOfSandPer100Kg = parseFloat(document.getElementById("sandPrice").value)
    const densityOfCementInKgPerCubicMeterMin = parseFloat(document.getElementById("densityOfCement").value.split("-")[0])
    const densityOfSandInKgPerCubicMeterMin = parseFloat(document.getElementById("densityOfSand").value.split("-")[0])
    const densityOfCementInKgPerCubicMeterMax = parseFloat(document.getElementById("densityOfCement").value.split("-")[1])
    const densityOfSandInKgPerCubicMeterMax = parseFloat(document.getElementById("densityOfSand").value.split("-")[1])
    const ratioForChinai = document.getElementById("ratioForChinai").value.split(":")
    const cementRatioForChinai = parseFloat(ratioForChinai[0])
    const sandRatioForChinai = parseFloat(ratioForChinai[1])
    const ratioForPlastering = document.getElementById("ratioForPlastering").value.split(":")
    const cementRatioForPlastering = parseFloat(ratioForPlastering[0])
    const sandRatioForPlastering = parseFloat(ratioForPlastering[1])
    const thicknessOfMortarForJoiningBricks = parseFloat(document.getElementById("thicknessOfMortarForJoiningBricks").value)
    const thicknessOfMortarForPlastering = parseFloat(document.getElementById("thicknessOfMortarForPlastering").value)
    const brickPrice = parseFloat(document.getElementById("brickPrice").value)
    // ################# Estimation For Chinai ################

    const areaOfBrickWithMortar = (brickWidth + thicknessOfMortarForJoiningBricks) * (brickHeight + thicknessOfMortarForJoiningBricks)
    const numberOfBricks = Math.ceil((areaInSquareFeet * 144) / areaOfBrickWithMortar)
    const volumeOfWall = (areaInSquareFeet * 0.75)
    const volumeOfBrickWithoutMortar = (brickLength * brickWidth * brickHeight)
    const volumeOfBricksInWall = 0.000578704 * volumeOfBrickWithoutMortar * numberOfBricks
    const dryVolumeOfMortarForJoiningBricks = 1.3333333 * 0.0283168 * (volumeOfWall - volumeOfBricksInWall)

    const cementQuantityForChinaiMin = (cementRatioForChinai * dryVolumeOfMortarForJoiningBricks * densityOfCementInKgPerCubicMeterMin) / (cementRatioForChinai + sandRatioForChinai)
    const sandQuantityForChinaiMin = (sandRatioForChinai * dryVolumeOfMortarForJoiningBricks * densityOfSandInKgPerCubicMeterMin) / (cementRatioForChinai + sandRatioForChinai)

    const cementBagsForChinaiExactMin = +(cementQuantityForChinaiMin / 50).toFixed(3)
    const cementBagsForChinaiMin = Math.ceil(cementBagsForChinaiExactMin)
    const sandQuantityInQuintalsForChinaiExactMin = +(sandQuantityForChinaiMin / 100).toFixed(3)
    const sandQuantityInQuintalsForChinaiMin = Math.ceil(sandQuantityInQuintalsForChinaiExactMin)

    const finalPriceOfCementForChinaiMin = cementBagsForChinaiMin * priceOfCementPer50Kg
    const finalPriceOfCementForChinaiExactMin = +(cementBagsForChinaiExactMin * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForChinaiMin = sandQuantityInQuintalsForChinaiMin * priceOfSandPer100Kg
    const finalPriceOfSandForChinaiExactMin = +(sandQuantityInQuintalsForChinaiExactMin * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfBricksForChinaiMin = numberOfBricks * brickPrice


    const cementQuantityForChinaiMax = (cementRatioForChinai * dryVolumeOfMortarForJoiningBricks * densityOfCementInKgPerCubicMeterMax) / (cementRatioForChinai + sandRatioForChinai)
    const sandQuantityForChinaiMax = (sandRatioForChinai * dryVolumeOfMortarForJoiningBricks * densityOfSandInKgPerCubicMeterMax) / (cementRatioForChinai + sandRatioForChinai)

    const cementBagsForChinaiExactMax = +(cementQuantityForChinaiMax / 50).toFixed(3)
    const cementBagsForChinaiMax = Math.ceil(cementBagsForChinaiExactMax)
    const sandQuantityInQuintalsForChinaiExactMax = +(sandQuantityForChinaiMax / 100).toFixed(3)
    const sandQuantityInQuintalsForChinaiMax = Math.ceil(sandQuantityInQuintalsForChinaiExactMax)

    const finalPriceOfCementForChinaiMax = cementBagsForChinaiMax * priceOfCementPer50Kg
    const finalPriceOfCementForChinaiExactMax = +(cementBagsForChinaiExactMax * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForChinaiMax = sandQuantityInQuintalsForChinaiMax * priceOfSandPer100Kg
    const finalPriceOfSandForChinaiExactMax = +(sandQuantityInQuintalsForChinaiExactMax * priceOfSandPer100Kg).toFixed(3)
    const finalPriceOfBricksForChinaiMax = numberOfBricks * brickPrice

    // #################### Estimation For Plastering ##################################

    const dryVolumeOfMortarForPlastering = (1.2 * 1.333333 * 0.0283168 * thicknessOfMortarForPlastering * areaInSquareFeet) / 12
    const cementQuantityForPlasteringMin = (cementRatioForPlastering * dryVolumeOfMortarForPlastering * densityOfCementInKgPerCubicMeterMin) / (cementRatioForPlastering + sandRatioForPlastering)
    const sandQuantityForPlasteringMin = (sandRatioForPlastering * dryVolumeOfMortarForPlastering * densityOfSandInKgPerCubicMeterMin) / (cementRatioForPlastering + sandRatioForPlastering)

    const cementBagsForPlasteringExactMin = +(cementQuantityForPlasteringMin / 50).toFixed(3)
    const cementBagsForPlasteringMin = Math.ceil(cementBagsForPlasteringExactMin)
    const sandQuantityInQuintalsForPlasteringExactMin = +(sandQuantityForPlasteringMin / 100).toFixed(3)
    const sandQuantityInQuintalsForPlasteringMin = Math.ceil(sandQuantityInQuintalsForPlasteringExactMin)

    const finalPriceOfCementForPlasteringMin = cementBagsForPlasteringMin * priceOfCementPer50Kg
    const finalPriceOfCementForPlasteringExactMin = +(cementBagsForPlasteringExactMin * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForPlasteringMin = sandQuantityInQuintalsForPlasteringMin * priceOfSandPer100Kg
    const finalPriceOfSandForPlasteringExactMin = +(sandQuantityInQuintalsForPlasteringExactMin * priceOfSandPer100Kg).toFixed(3)

    const cementQuantityForPlasteringMax = (cementRatioForPlastering * dryVolumeOfMortarForPlastering * densityOfCementInKgPerCubicMeterMax) / (cementRatioForPlastering + sandRatioForPlastering)
    const sandQuantityForPlasteringMax = (sandRatioForPlastering * dryVolumeOfMortarForPlastering * densityOfSandInKgPerCubicMeterMax) / (cementRatioForPlastering + sandRatioForPlastering)

    const cementBagsForPlasteringExactMax = +(cementQuantityForPlasteringMax / 50).toFixed(3)
    const cementBagsForPlasteringMax = Math.ceil(cementBagsForPlasteringExactMax)
    const sandQuantityInQuintalsForPlasteringExactMax = +(sandQuantityForPlasteringMax / 100).toFixed(3)
    const sandQuantityInQuintalsForPlasteringMax = Math.ceil(sandQuantityInQuintalsForPlasteringExactMax)

    const finalPriceOfCementForPlasteringMax = cementBagsForPlasteringMax * priceOfCementPer50Kg
    const finalPriceOfCementForPlasteringExactMax = +(cementBagsForPlasteringExactMax * priceOfCementPer50Kg).toFixed(3)
    const finalPriceOfSandForPlasteringMax = sandQuantityInQuintalsForPlasteringMax * priceOfSandPer100Kg
    const finalPriceOfSandForPlasteringExactMax = +(sandQuantityInQuintalsForPlasteringExactMax * priceOfSandPer100Kg).toFixed(3)

    const output = document.getElementById("answer");
    output.innerHTML =
        `
        <div>
            <h2>For Chinai of 9" wall, the estimation (taking min density) for cement and sand: INR ${finalPriceOfCementForChinaiMin + finalPriceOfSandForChinaiMin + finalPriceOfBricksForChinaiMin} (Precisely :  ${(finalPriceOfCementForChinaiExactMin + finalPriceOfSandForChinaiExactMin + finalPriceOfBricksForChinaiMin).toFixed(3)})</h2>
            <table>
                <tr>
                <th></th>
                <th>Bricks</th>
                <th>Cement</th>
                <th>Sand</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${numberOfBricks} Bricks</td>
                <td>${cementBagsForChinaiMin} Bags (${cementBagsForChinaiExactMin})</td>
                <td>${sandQuantityInQuintalsForChinaiMin} Quintals (${sandQuantityInQuintalsForChinaiExactMin})</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfBricksForChinaiMin}</td>
                <td>INR ${finalPriceOfCementForChinaiMin} (Exact Price: ${finalPriceOfCementForChinaiExactMin})</td>
                <td>INR ${finalPriceOfSandForChinaiMin} (Exact Price: ${finalPriceOfSandForChinaiExactMin})</td>
                </tr>
            </table> 
        </div>
        <div>
            <h2>For Chinai of 9" wall, the estimation (taking max density) for cement and sand: INR ${finalPriceOfCementForChinaiMax + finalPriceOfSandForChinaiMax + finalPriceOfBricksForChinaiMax} (Precisely :  ${(finalPriceOfCementForChinaiExactMax + finalPriceOfSandForChinaiExactMax + finalPriceOfBricksForChinaiMax).toFixed(3)})</h2>
            <table>
                <tr>
                <th></th>
                <th>Bricks</th>
                <th>Cement</th>
                <th>Sand</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${numberOfBricks} Bricks</td>
                <td>${cementBagsForChinaiMax} Bags (${cementBagsForChinaiExactMax})</td>
                <td>${sandQuantityInQuintalsForChinaiMax} Quintals (${sandQuantityInQuintalsForChinaiExactMax})</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfBricksForChinaiMax}</td>
                <td>INR ${finalPriceOfCementForChinaiMax} (Exact Price: ${finalPriceOfCementForChinaiExactMax})</td>
                <td>INR ${finalPriceOfSandForChinaiMax} (Exact Price: ${finalPriceOfSandForChinaiExactMax})</td>
                </tr>
            </table> 
        </div>
        <div>
            <h2>For Plastering ONE SIDE of given wall area ${areaInSquareFeet}sqft, the estimation (taking min density) for cement and sand: INR ${finalPriceOfCementForPlasteringMin + finalPriceOfSandForPlasteringMin} (Precisely :  ${(finalPriceOfCementForPlasteringExactMin + finalPriceOfSandForPlasteringExactMin).toFixed(3)})</h2>
            <table>
                <tr>Max
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForPlasteringMin} Bags (${cementBagsForPlasteringExactMin})</td>
                <td>${sandQuantityInQuintalsForPlasteringMin} Quintals (${sandQuantityInQuintalsForPlasteringExactMin})</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForPlasteringMin} (Exact Price: ${finalPriceOfCementForPlasteringExactMin})</td>
                <td>INR ${finalPriceOfSandForPlasteringMin} (Exact Price: ${finalPriceOfSandForPlasteringExactMin})</td>
                </tr>
            </table>
        </div>
        <div>
            <h2>For Plastering ONE SIDE of given wall area ${areaInSquareFeet}sqft, the estimation (taking max density) for cement and sand: INR ${finalPriceOfCementForPlasteringMax + finalPriceOfSandForPlasteringMax} (Precisely :  ${(finalPriceOfCementForPlasteringExactMax + finalPriceOfSandForPlasteringExactMax).toFixed(3)})</h2>
            <table>
                <tr>Max
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForPlasteringMax} Bags (${cementBagsForPlasteringExactMax})</td>
                <td>${sandQuantityInQuintalsForPlasteringMax} Quintals (${sandQuantityInQuintalsForPlasteringExactMax})</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForPlasteringMax} (Exact Price: ${finalPriceOfCementForPlasteringExactMax})</td>
                <td>INR ${finalPriceOfSandForPlasteringMax} (Exact Price: ${finalPriceOfSandForPlasteringExactMax})</td>
                </tr>
            </table>
        </div>
        `
});


