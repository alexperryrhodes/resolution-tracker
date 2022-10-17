// Import required packages
import mongoose from 'mongoose';

// Define resolution schema
const resolutionSchema = mongoose.Schema({
    resolutionID: {type: Number, required: true},
    name: {type: String, required: true},
    goalCount: {type: Number, required: true}
});

// Create resolution model
const Resolution = mongoose.model("Resolution", resolutionSchema);

// Define Create Resolution Function
const createResolution = async (resolutionID, name, goalCount) => {
    const resolution = new Resolution({resolutionID: resolutionID, name: name, goalCount: goalCount});
    return resolution.save();
};

// Define update resolution function
const updateResolution = async (resolutionID, name, goalCount) => {
    const result = await Resolution.replaceOne(
        {resolutionID: resolutionID},
        {name: name, goalCount: goalCount});
    return result.modifiedCount;
};

// Define delete resolution function
const deleteResolution = async (resolutionID) => {
    const result = await Resolution.deleteOne({resolutionID: resolutionID});
    return result.deletedCount;
};