const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb+srv://jeli:Jalendhar@10@cluster0.auqumpa.mongodb.net/?retryWrites=true&w=majority)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
