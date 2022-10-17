// Import required packages
import mongoose from 'mongoose';

// Define record schema
const recordSchema = mongoose.Schema({
    recordID: {type: Number, required: true},
    resolutionID: {type: Number, required: true},
    date: {type: String, required: true}
});

// Create record model
const Record = mongoose.model("Record", recordSchema);

// Define create record function
const createRecord = async (resolutionID, date) => {
    const record = new Record({resolutionID:resolutionID, date: date});
    return record.save();
}

// Define delete record function
const deleteRecord = async (recordID) => {
    const result = await Record.deleteOne({recordID : recordID});
    return result.deletedCount;
}