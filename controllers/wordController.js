const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

router.get('/words', async (req, res) => {
    try {
        const words = await Word.find();
        res.json(words);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/words/:id', async (req, res) => {
    try {
        const word = await Word.findOne({ id: req.params.id });
        if (!word) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(word);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;