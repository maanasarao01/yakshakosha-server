const express=require('express')
const router=express.Router();
const path = require('path');
const fs = require('fs');

//Define routes
router.get('/prasangaPrathi', (req, res) => {
    const { query } = req.query;
    const pdfFolder =path.join(__dirname, '/public/pdfFiles')
    fs.readdir(pdfFolder, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        const matchingFiles = files.filter(file => file.includes(query.toLowerCase()) && file.endsWith('.pdf'));
    
        if (matchingFiles.length === 0) {
            return res.status(404).json({ error: 'PDF not found' });
        }
        const pdfFile = matchingFiles[0];
        const filePath = path.join(pdfFolder, pdfFile);

        res.set('Content-Type', 'application/pdf').sendFile(filePath);
    })
})

router.get('/story', (req, res) => {
    const { query } = req.query;
    const stories =path.join(__dirname, '/public/stories')
    fs.readdir(stories, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        const matchingFiles = files.filter(file => file.includes(query.toLowerCase()) && file.endsWith('.txt'));
    
        if (matchingFiles.length === 0) {
            return res.status(404).json({ error: 'File not found' });
        }
        const story = matchingFiles[0];
        const filePath = path.join(stories, story);

        res.set('Content-Type', 'jpeg').sendFile(filePath);
    })
})

module.exports=router
