const Notes = require('../models/NotesModel')

const mongoose = require('mongoose')

// get all notes
const getNotes = async (req, res) => {
  const notes = await Notes.find({}).sort({createdAt: -1})
  //console.log("wtf")
  res.status(200).json(notes)
}

// get a single note
const getNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such note'})
  }

  const note = await Notes.findById(id)

  if (!note) {
    return res.status(404).json({error: 'No such note'})
  }

  res.status(200).json(note)
}

// create a new note
const createNote = async (req, res) => {
 
  const {star, physical, note} = req.body;
  // add to the database
    try {
        const notes = await Notes.create({star, physical, note})
        res.status(200).json(notes)
      } catch (error) {
        res.status(400).json({error: error.message})    
      }
}


// delete a note
const deleteNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such note'})
  }

  const note = await Notes.findOneAndDelete({_id: id})

  if(!note) {
    return res.status(400).json({error: 'No such note'})
  }
 
  res.status(200).json(note)

}

// update a note
const updateNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such note'})
  }

  const note = await Notes.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!note) {
    return res.status(400).json({error: 'No such note'})
  }

  res.status(200).json(note)
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote
}