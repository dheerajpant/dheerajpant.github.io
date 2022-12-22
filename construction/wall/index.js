document.getElementById('form1').addEventListener('submit', function (evt) {

    evt.preventDefault();
    const areaInSquareFeet = parseFloat(document.getElementById("area").value)
    const brickLength = parseFloat(document.getElementById("brickLength").value)
    const brickWidth = parseFloat(document.getElementById("brickWidth").value)
    const brickHeight = parseFloat(document.getElementById("brickHeight").value)
    const priceOfCementPer50Kg = parseFloat(document.getElementById("cementPrice").value)
    const priceOfSandPer100Kg = parseFloat(document.getElementById("sandPrice").value)
    const densityOfCementInKgPerCubicMeter = parseFloat(document.getElementById("densityOfCement").value)
    const densityOfSandInKgPerCubicMeter = parseFloat(document.getElementById("densityOfSand").value)
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

    const cementQuantityForChinai = (cementRatioForChinai * dryVolumeOfMortarForJoiningBricks * densityOfCementInKgPerCubicMeter) / (cementRatioForChinai + sandRatioForChinai)
    const sandQuantityForChinai = (sandRatioForChinai * dryVolumeOfMortarForJoiningBricks * densityOfSandInKgPerCubicMeter) / (cementRatioForChinai + sandRatioForChinai)

    const cementBagsForChinai = Math.ceil(cementQuantityForChinai / 50)
    const sandQuantityInQuintalsForChinai = Math.ceil(sandQuantityForChinai / 100)

    const finalPriceOfCementForChinai = cementBagsForChinai * priceOfCementPer50Kg
    const finalPriceOfSandForChinai = sandQuantityInQuintalsForChinai * priceOfSandPer100Kg
    const finalPriceOfBricksForChinai = numberOfBricks * brickPrice

    // #################### Estimation For Plastering ##################################

    const dryVolumeOfMortarForPlastering = (1.2 * 1.333333 * 0.0283168 * thicknessOfMortarForPlastering * areaInSquareFeet) / 12
    const cementQuantityForPlastering = (cementRatioForPlastering * dryVolumeOfMortarForPlastering * densityOfCementInKgPerCubicMeter) / (cementRatioForPlastering + sandRatioForPlastering)
    const sandQuantityForPlastering = (sandRatioForPlastering * dryVolumeOfMortarForPlastering * densityOfSandInKgPerCubicMeter) / (cementRatioForPlastering + sandRatioForPlastering)

    const cementBagsForPlastering = Math.ceil(cementQuantityForPlastering / 50)
    const sandQuantityInQuintalsForPlastering = Math.ceil(sandQuantityForPlastering / 100)

    const finalPriceOfCementForPlastering = cementBagsForPlastering * priceOfCementPer50Kg
    const finalPriceOfSandForPlastering = sandQuantityInQuintalsForPlastering * priceOfSandPer100Kg


    const output = document.getElementById("answer");
    output.innerHTML =
        `
        <div>
            <h2>For Chinai of 9" wall, the estimation for cement and sand: INR ${finalPriceOfCementForChinai + finalPriceOfSandForChinai + finalPriceOfBricksForChinai}</h2>
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
                <td>${cementBagsForChinai} Bags</td>
                <td>${sandQuantityInQuintalsForChinai} Quintals</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfBricksForChinai}</td>
                <td>INR ${finalPriceOfCementForChinai}</td>
                <td>INR ${finalPriceOfSandForChinai}</td>
                </tr>
            </table> 
        </div>
        <div>
            <h2>For Plastering ONE SIDE of given wall area ${areaInSquareFeet}sqft, the estimation for cement and sand: INR ${finalPriceOfCementForPlastering + finalPriceOfSandForPlastering}</h2>
            <table>
                <tr>
                <th></th>
                <th>Cement</th>
                <th>Sand</th>
                </tr>
                <tr>
                <td><b>Quantity</b>
                <td>${cementBagsForPlastering} Bags</td>
                <td>${sandQuantityInQuintalsForPlastering} Quintals</td>
                </tr>
                <tr>
                <td><b>Price</b>
                <td>INR ${finalPriceOfCementForPlastering}</td>
                <td>INR ${finalPriceOfSandForPlastering}</td>
                </tr>
            </table>
        </div>
        `
});


