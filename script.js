const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
function islampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}
function lampOn() {
    if(!islampBroken ()){
    lamp.src='img/acesa.jpg';
    }
}
function lampOff() {
    if(!islampBroken ()){
    lamp.src='img/apagada.jpeg';
    }
}
function lampBroken(){
    lamp.src='img/quebrada.jpeg';
}
turnOn.addEventListener('click',  lampOn); 
turnOff.addEventListener('click',  lampOff);
lamp.addEventListener('mouseover',  lampOn);
lamp.addEventListener('mouseleave',  lampOff);
lamp.addEventListener('dblclick', lampBroken);