const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const mySchema = new mongoose.Schema({
    Role: String,
    FullName: String,
    Email: String,
    Password: String,
    Phone: String,
    Img: String
},
)

mySchema.methods.comparePass = async function (pass, passDB) {
    return await bcrypt.compare(pass, passDB)
}
const User = mongoose.model('User', mySchema);


module.exports = User