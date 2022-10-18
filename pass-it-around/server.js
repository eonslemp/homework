const express = require('express')

// const routes = require('routes')

const port = 3000

const app = express()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))


app.use('/', (req, res) => {
    res.render('./index')
})

app.listen(port, () => console.log('listening on port: ', port))

