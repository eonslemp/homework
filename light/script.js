// const image = document.getElementById("image")
// const body = document.getElementsByTagName("body")
// const border = document.querySelector(".container")
// const messageOne = document.querySelector('h1')
// const messageTwo = document.querySelector('h2')
// let lightOff = true;



// image.addEventListener('click', lightSwitch)

// console.log(border.style)
// function lightSwitch() {
//     if(lightOff == true){
//     lightOff = false;
//     document.body.style.backgroundColor = 'var(--on)';
//     image.setAttribute('src', "lighton.png");
//     // border.style.border =  '50px solid white';
//     messageOne.innerHTML = 'The light is on'
//     messageTwo.innerHTML = 'Make it turn off'
//     // border.style.border = "50px solid white";
//     // border.style.border = 'white'
//     messageOne.style.color = 'var(--off)'
//     messageTwo.style.color = 'var(--off)'
//     } else {
//         lightOff = true;
//         document.body.style.backgroundColor = 'var(off)';
//         image.setAttribute('src', "lightoff.png");
//         messageOne.innerHTML = 'The light is off'
//         messageTwo.innerHTML = 'Make it turn on'
//         messageOne.style.color = 'var(--on)'
//         messageTwo.style.color = 'var(--on)'
//         document.body.style.backgroundColor = 'var(--off)';
//         // border.style.border = "50px solid black";
//         //  border.style.border = 'black'




//     }
//  }
    // message.style.color = var(rgb(46, 4, 59))


    const image = document.getElementById("image")
    const body = document.getElementsByTagName("body")
    const border = document.querySelector(".container")
    const messageOne = document.querySelector('h1')
    const messageTwo = document.querySelector('h2')
    let lightOff = true;
    
    
    
    image.addEventListener('click', lightSwitch)
    
    console.log(border.style)
    function lightSwitch() {
        if(lightOff == true){
        lightOff = false;
        document.body.style.backgroundColor = 'var(--on)';
        image.setAttribute('src', "lighton.png");
        // border.style.border =  '50px solid white';
        messageOne.innerHTML = 'The light is on'
        messageTwo.innerHTML = 'Make it turn off'
        // border.style.border = "50px solid white";
        // border.style.border = 'white'
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
            // border.style.border = "50px solid black";
            //  border.style.border = 'black'
    
    
    
    
        }
}