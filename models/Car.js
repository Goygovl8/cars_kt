const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    marka: {
        type: String,
        required: [true , "Название марки обязательно!"],
        tirm: true
    },
    model: {
        type: String,
        required: [true , "Название модели обязательно!"],
        tirm: true
    },
    price: {
        type: Number,
        required: [true , "Цена обязательно!"],
        tirm: true
    },
    color: {
        type: String,
        required: ["Название цвета обязательно!"],
        trim: true
    }
})

module.exports = mongoose.model('Car' , carSchema)