const express = require('express')
const moviesControllers =  require('./../Controllers/MoviesControllers')
const router = express.Router()

router.param('id', (req, res, value)=>{
 //the value parameters is store hte value of id;
 console.log('Movie ID is ' + value)
})
//using this method we can create param middleware
// param middleware is a special middleware which only runs 
// for certain route parameters



router.route('/')
 .get(moviesControllers.getAllMovies)
 .post(moviesControllers.createMovie)

 router.route('/:id') 
 .patch(moviesControllers.updateMovie)
 .delete(moviesControllers.deleteMovie)
 .get(moviesControllers.getMovie)

module.exports = router

