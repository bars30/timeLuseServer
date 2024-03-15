const express = require('express')
let app = express() 
const moviesRouter = require('./Routes/moviesRoutej')
const morgan = require('morgan')


const logger = function(req, res, next){
 console.log('Custom middleware called!');
 next()
}

app.use(express.json()) 
app.use(morgan('dev'))
app.use(logger)
app.use((req, res, next)=>{
 // we nned to know in which time the recuest were created
 req.requestedAt = new Date().toISOString();
 next()
})

// using routes
app.use('/api/v1/movies', moviesRouter)

module.exports = app;


app.get('/nerv', (req, res) => {
 res.send('Hello from Firebase Express App! nervv');
});

