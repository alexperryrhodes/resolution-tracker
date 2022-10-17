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

// Define Record Schema
const recordSchema = mongoose.Schema({
    recordID: {type: Number, required: true},
    resolutionID: {type: Number, required: true},
    date: {type: String, required: true}
});

// Create model
const Record = mongoose.model("Record", recordSchema);

// Define Resolution Schema
const resolutionSchema = mongoose.Schema({
    resolutionID: {type: Number, required: true},
    goal: {type: Number, required: true}
});

// Create model
const Resolution = mongoose.model("Resolution", resolutionSchema);