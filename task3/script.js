const trafficLightEl0 = document.querySelector('#trafficLight0');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
function makeGreen() {
    trafficLightEl0.style.background = ('green');
    trafficLightEl1.style.background = ('');
    trafficLightEl2.style.background = ('');

}

function makeYellow() {
    trafficLightEl0.style.background = ('');
    trafficLightEl1.style.background = ('yellow');
    trafficLightEl2.style.background = ('');
    
}

function makeRed() {
    trafficLightEl0.style.background = ('');
    trafficLightEl1.style.background = ('');
    trafficLightEl2.style.background = ('red');
}

trafficLightEl0.addEventListener('click', makeGreen);
trafficLightEl1.addEventListener('click', makeYellow);
trafficLightEl2.addEventListener('click', makeRed);