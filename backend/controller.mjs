// Import required packages
import express from 'express';
import * as connect from './connection.mjs'

// Import models
import * as resolution from './model.mjs';

// Establish variables
const app = express();
const PORT = 3000;

app.use(express.json())

// Confirm sever is running by printing to terminal
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});


/*** HTTP Resolution Methods ***/


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

// Update resolutions
app.put('/resolutions/:_id', (req, res) => {
    resolution.updateResolution(req.params._id, req.body.name, req.body.goalCount, req.body.color)
    .then(updatedCount => {
        if (updatedCount === 1) {
            res.status(204).send()
        }
        else {
            res.status(500).json({Error: 'Resolution Not Updated'})
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'});
    })
});

// Delete a resolution
app.delete('/resolutions/:_id', (req, res) => {
    resolution.deleteResolution(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send()
            }
            else {
                res.status(500).json({Error: 'Resolution Not Deleted'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({Error: 'Request Failed'})
        })
});


/*** HTTP Date Records Methods ***/


// Add a new record
app.put('/resolutions/:_id/records/add', (req, res) => {
    resolution.addResolutionRecord(req.params._id, req.body.recordDate)
    .then(addedCount => {
        if (addedCount === 1) {
            res.status(204).send()
        }
        else {
            res.status(500).json({Error: 'Record Not Added'})
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'});
    })
});

// Remove a record
app.put('/resolutions/:_id/records/remove', (req, res) => {
    resolution.removeResolutionRecord(req.params._id, req.body.recordDate)
    .then(removedCount => {
        if (removedCount === 1) {
            res.status(204).send()
        }
        else {
            res.status(500).json({Error: 'Record Not Removed'})
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({Error: 'Request Failed'});
    })
});