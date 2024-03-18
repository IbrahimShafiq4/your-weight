const gravitationalAccelerations = {
    mercury: 3.4,
    venus: 8.87,
    earth: 9.81,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
}

function calculatingWeightOnEachPlanet(weightOnEarth) {
    const weightsOnPlanet = {};
    for (const planet in gravitationalAccelerations) {
        const gravityOnPlanet = gravitationalAccelerations[planet];
        const weightOnPlanet = (weightOnEarth * gravityOnPlanet) / gravitationalAccelerations.earth;
        weightsOnPlanet[planet] = weightOnPlanet
    }

    return weightsOnPlanet;
}

function calculatingWeights() {
    const earthWeightInput = document.querySelector('#earthWeight');
    const resultDiv = document.querySelector('.result');

    const weightOnEarth = parseInt(earthWeightInput.value);

    if (!isNaN(weightOnEarth)) {
        const weightsOnPlanet = calculatingWeightOnEachPlanet(weightOnEarth);
        let result = ``;
        for (const planet in weightsOnPlanet) {
            result += `
                <div class='planet-box'>
                    <img src = ${planet}.png />
                    <p>${
                        planet.charAt(0).toUpperCase() + planet.slice(1)
                        }<br>${weightsOnPlanet[planet].toFixed(2)}kg</p>
                </div>
            `
        }
        resultDiv.innerHTML = result
    } else {
        resultDiv.innerHTML = "<p class='error'>Please enter a valid weight.</p>"
    }
}

document.querySelector('button').addEventListener('click', calculatingWeights)