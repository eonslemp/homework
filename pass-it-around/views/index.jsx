const React = require('react')


class Index extends React.Component {

    render() {

        const num_bottles = []

        for(let i = 99; i >= 0; i--){
        num_bottles.push(i)
        }
        let num = 99;


        return (
        <body>
        
        <div>`{num} bottles of beer on the wall`</div>
        <div>
            <a href={`/${num-1}`}> take one down, and pass it around</a>
        </div>

        </body>

        )

}
}

module.exports = Index;