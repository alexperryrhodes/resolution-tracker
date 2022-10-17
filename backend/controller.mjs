// Import required packages
import express from 'express';

// Import models
import * as record from 'models/record_model.mjs';
import * as resolution from 'models/resolution_model.mjs';

// Establish variables
const app = express();
const PORT = 3000;

app.use(express.json())

// Confirm sever is running by printing to terminal
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Create a new record
app.post('/records', (req, res) => {
    record.createRecord(req.body.recordID, req.body.date)
    .then(record => {
        res.status.json(record);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'})
    })
});