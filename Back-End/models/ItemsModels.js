const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const mySchema = new mongoose.Schema({
    Name: String,
    Price: String,
    Desc: String,
    Img: String

},
)


const Item = mongoose.model('Item', mySchema);


module.exports = Item