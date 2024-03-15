const mongoose = require('mongoose')
const watchSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, 'the name field is required!'],
  unique: true
 },
 description: {
  type: String,
  required: [true, 'the description field is required!'],
  unique: true
 },
 price: {
  type: String,
  required: [true, 'the price field is required!'],
  unique: true
 }
})

const Watch = mongoose.model('Watch', watchSchema)

module.exports = Watch;