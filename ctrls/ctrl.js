const Character = require('./../models/Character')

module.exports = {
    getCharacter: (req, res, next) => {
        Character.findById(req.params.id, (err, Character) => {
            if (err)
                res.send(err)
            else if (!Character)
                res.send(404)
            else
                res.send(Character)
            next()
        })
    },
    getAllCharacters: (req, res, next) => {
        Character.find((err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
            next()
        })
    },
    deleteCharacter: (req, res, next) => {
        Character.findByIdAndRemove(req.params.id, (err) => {
            if (err)
                res.send(err)
            else
                res.sendStatus(204)
            next()
        })
    },
    addCharacter: (req, res, next) => {
        (new Character(req.body)).save((err, newCharacter) => {
            if (err)
                res.send(err)
            else if (!newCharacter)
                res.send(400)
            else
                res.send(newCharacter)
            next()
        })
    },
    updateCharacter: (req, res, next) => {
        Character.findByIdAndUpdate(req.params.id, req.body, (err, updatedCharacter) => {
            if (err)
                res.send(err)
            else if (!updatedCharacter)
                res.send(400)
            else
                res.send(req.body)
            next()
        })
    }
}