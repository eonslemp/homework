const image = document.getElementById("image")
const body = document.getElementsByTagName("body")
const border = document.getElementsByClassName("container")
const messageOne = document.querySelector('h1')
const messageTwo = document.querySelector('h2')
let lightOff = true;



image.addEventListener('click', lightSwitch)


function lightSwitch() {
    if(lightOff == true){
    lightOff = false;
    document.body.style.backgroundColor = 'var(--on)';
    image.setAttribute('src', "lighton.png");
    // border.style.border =  '50px solid white';
    messageOne.innerHTML = 'The light is on'
    messageTwo.innerHTML = 'Make it turn off'
    messageOne.style.color = 'var(--off)'
    messageTwo.style.color = 'var(--off)'
    } else {
        lightOff = true;
        document.body.style.backgroundColor = 'var(off)';
        image.setAttribute('src', "lightoff.png");
        messageOne.innerHTML = 'The light is off'
        messageTwo.innerHTML = 'Make it turn on'
        messageOne.style.color = 'var(--on)'
        messageTwo.style.color = 'var(--on)'
        document.body.style.backgroundColor = 'var(--off)';




    }
    // message.style.color = var(rgb(46, 4, 59))



}