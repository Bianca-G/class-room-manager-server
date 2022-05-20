const mongoose = require('mongoose')

const classRoomSchema = mongoose.Schema({
    capacity: Number,
    days_availability: [String],
    schedule_availability: [{from: Number, until: Number,}],
})

const ClassRooms = mongoose.model('class_rooms', classRoomSchema)

module.exports = ClassRooms