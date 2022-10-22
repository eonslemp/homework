const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
    <h1>99 Bottles of beer on the wall <br/>
    <a href="/98">Take one down and pass it around</a></h1>
    `);

});

app.get('/:num_bottles', (req, res) => {
    let num = (req.params.num_bottles)
    if (num == 0){
        res.send(`<h1>no more beer, you have a serious drinking problem,
         <br/> and probably need help, <br/>
        please do not use this link too go back to 
        <a href='/'> home page</a></h1>`)  
    } else {
        res.send(`<h1> ${num} bottles of beer on the wall  <a href='/${num-1}'>take one down and pass it around</a></h1>`)
    }
});

app.listen(3000,() => {
    console.log('listening on port' , 3000);
});

