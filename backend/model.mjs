// Import required packages
import mongoose from 'mongoose';

// Establish connection string to MondoDB server
mongoose.connect(
    'mongodb+srv://dbUser:vJZYlRpOLCy112TY@cluster0.8ju03uf.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })

// Connect to to the database
const db = mongoose.connection;

// The open event is called when the database connection successfully opens
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

/******* Record *******/

// Define Record Schema
const recordSchema = mongoose.Schema({
    recordID: {type: Number, required: true},
    resolutionID: {type: Number, required: true},
    date: {type: String, required: true}
});

// Create Record Model
const Record = mongoose.model("Record", recordSchema);

// Define Create Record Function
const createRecord = async (resolutionID, date) => {
    const record = new Record({resolutionID:resolutionID, date: date});
    return record.save();
}

// Define Delete Record Function
const deleteRecord = async (recordID) => {
    const result = await Record.deleteOne({recordID : recordID});
    return result.deletedCount;
}

/******* Resolution *******/

// Define Resolution Schema
const resolutionSchema = mongoose.Schema({
    resolutionID: {type: Number, required: true},
    name: {type: String, required: true},
    goalCount: {type: Number, required: true}
});

// Create Resolution Model
const Resolution = mongoose.model("Resolution", resolutionSchema);

// Define Create Resolution Function
const createResolution = async (resolutionID, name, goalCount) => {
    const resolution = new Resolution({resolutionID: resolutionID, name: name, goalCount: goalCount});
    return resolution.save();
}

// Define Update Resolution Function
const updateResolution = async (resolutionID, name, goalCount) => {
    const result = await Resolution.replaceOne(
        {resolutionID: resolutionID},
        {name: name, goalCount: goalCount});
    return result.modifiedCount;
}

// Define Delete Resolution Function
const deleteResolution = async (resolutionID) => {
    const result = await Resolution.deleteOne({resolutionID: resolutionID});
    return result.deletedCount;
}
