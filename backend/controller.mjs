// Import required packages
import express from 'express';
import * as connect from './connection.mjs'

// Import models
//import * as record from './models/record_model.mjs';
import * as resolution from './models/model.mjs';

// Establish variables
const app = express();
const PORT = 3000;

app.use(express.json())

// Confirm sever is running by printing to terminal
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Get resolutions
app.get('/resolutions', (req, res) => {
    let filter = {}
    resolution.readResolution(filter, '', 0)
    .then(resolution => {
        res.status(200).send(resolution);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'});
    })
});

// Create a new resolutions
app.post('/resolutions', (req, res) => {
    resolution.createResolution(req.body.name, req.body.goalCount, req.body.color)
    .then(resolution => {
        res.status(201).json(resolution);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'});
    })
});

// Add a new record
app.put('/resolutions', (req, res) => {
    resolution.addResolutionRecord(req.body.resolutionID, req.body.recordDate)
    .then(resolution => {
        res.status(201).json(resolution);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'});
    })
});