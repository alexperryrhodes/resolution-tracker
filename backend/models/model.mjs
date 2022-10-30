// Import required packages
import mongoose from 'mongoose';

// Define resolution schema
const resolutionSchema = mongoose.Schema({
    name: {type: String, required: true},
    goalCount: {type: Number, required: true},
    color: {type: String, required: true},
    records: {type: Array, required: true}
});

// Create resolution model
const Resolution = mongoose.model("Resolution", resolutionSchema);

// Define Create Resolution Function
const createResolution = async (name, goalCount, color) => {
    const resolution = new Resolution({name: name, goalCount: goalCount, color: color, records: []});
    return resolution.save();
};

// Define update resolution function
const updateResolution = async (resolutionID, name, goalCount, color) => {
    const result = await Resolution.updateOne(
        {resolutionID: resolutionID},
        {name: name, goalCount: goalCount, color: color});
    return result.modifiedCount;
};

// Define update record function (date record of a resolution)
const addResolutionRecord = async (resolutionID, recordDate) => {
    const result = await Resolution.updateOne(
        {resolutionID: resolutionID},
        {$push: {records: recordDate}});
    return result.modifiedCount;
};

// Define delete record function (date record of a resolution)
const removeResolutionRecord = async (resolutionID, recordDate) => {
    const result = await Resolution.updateOne(
        {resolutionID: resolutionID},
        {$pull: {records: recordDate}});
    return result.modifiedCount;
};

// Define delete resolution function
const deleteResolution = async (resolutionID) => {
    const result = await Resolution.deleteOne({resolutionID: resolutionID});
    return result.deletedCount;
};

// Define read resolution function 
const readResolution = async (filter, projection, limit) => {
    const query = Resolution.find(filter).select(projection).limit(limit);
    return query.exec();
};

export { createResolution, updateResolution, addResolutionRecord, removeResolutionRecord, deleteResolution, readResolution};