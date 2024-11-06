const express = require('express')
const router = express.Router()
const {
    getNotes, 
    getNote, 
    createNote, 
    deleteNote, 
    updateNote
  } = require('../controllers/notesController')


//get 
router.get('/', getNotes)

// GET a single Notes
router.get('/:id', getNote)

// POST a new Notes
router.post('/', createNote)

// DELETE a Notes
router.delete('/:id', deleteNote)

// UPDATE a Notes
router.patch('/:id', updateNote)


module.exports = router;