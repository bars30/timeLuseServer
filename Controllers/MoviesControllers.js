const fs = require('fs')
let movies = JSON.parse(fs.readFileSync('./data/movies.json'))
const Watch = require('./../Models/watchModel')

exports.getAllMovies = async (req, res)=>{
   try{
      const movies = await Watch.find()

      res.status(200).json({
         status: "success",
         data: {
            movies
         }
      })
   } catch(err){
      res.status(400).json({
         status: "fail",
         message: err.message
      })
   }
}
exports.deleteMovie = async (req, res)=>{
   try{
      const updatedWatch = await Watch.findByIdAndDelete(req.params.id)
      res.status(201).json({
         status: "successs",
         data: {
            
         }
      })
   } catch(err){
      res.status(400).json({
         status: "fail",
         message: err.message
      })
   }
}
exports.updateMovie = async (req, res)=>{
   try{
      const updatedWatch = await Watch.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      res.status(201).json({
         status: "successs",
         data: {
            updatedWatch
         }
      })
   } catch(err){
      res.status(400).json({
         status: "fail",
         message: err.message
      })
   }
}
exports.createMovie = async (req, res)=>{
 try {
   const watch = await Watch.create(req.body)
   res.status(201).json({
      status: "successs",
      data: {
         watch
      }
   })
 } catch (err){
   res.status(400).json({
      status: "fail",
      message: err.message
   })
 }
}
exports.getMovie = async (req, res)=>{
   try{
      const movie = await Watch.findById(req.params.id);
      
      res.status(200).json({
         status: "success",
         data: {
            movie
         }
      })
   } catch(err){
      res.status(400).json({
         status: "fail",
         message: err.message
      })
   }
}