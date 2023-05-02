const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let clientSchema = new Schema({
      lastname: {
        type: String
      },
      firstname: {
        type: String
      },
      email: {
        type: String
      },
      contact: {
        type: Number
      },
      date: {
        type: Date
      },
}, {
    collection: 'clients'
})
module.exports = mongoose.model('Client', clientSchema)