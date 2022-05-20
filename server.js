const express = require('express')

const app = express()

// DB connection
const mongoose = require('mongoose')
mongoose
    .connect('mongodb+srv://root:Zb4vYqVH94q0VWQF@cluster0.zprmc.mongodb.net/class_room_manager?retryWrites=true&w=majority')
    .then(() => console.log('CONECTADO A LA DB'))

// Model
const ClassRooms = require('./models/ClassRooms.model')

// App Router
app
    .get('/health', (req, res) => res.json(
        {message: 'OK'}
    ))
    .get('/api/class-rooms', (req, res) =>
        ClassRooms
            .find()
            .then(allClassRooms =>
                // allClassRooms.forEach( classRoom =>
                //     console.log(
                //         classRoom.toString()
                //     )
                // )
                res.json(allClassRooms)
            )
    )

app.listen(5005, () => console.log("servidor funcionando"))
// por qué funciona en el 5005 y si le pongo el 6000 no me levanta?


/**
 * parameterization ->  :id_name
 *
 * usage -> const { idName } = req.params
 *
 */