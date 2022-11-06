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


/*** Resolution Functions ***/


// Define Create Resolution Function
const createResolution = async (name, goalCount, color) => {
    const resolution = new Resolution({name: name, goalCount: goalCount, color: color, records: []});
    return resolution.save();
};

// Define update resolution function
const updateResolution = async (_id, name, goalCount, color) => {
    const result = await Resolution.updateOne(
        {_id: _id},
        {name: name, goalCount: goalCount, color: color});
    return result.modifiedCount;
};

// Define delete resolution function
const deleteResolution = async (_id) => {
    const result = await Resolution.deleteOne({_id: _id});
    return result.deletedCount;
};

// Define read resolution function 
const readResolution = async (filter, projection, limit) => {
    const query = Resolution.find(filter).select(projection).limit(limit);
    return query.exec();
};


/*** Resolution Date Records Functions ***/


// Define add record function
const addResolutionRecord = async (_id, recordDate) => {
    const result = await Resolution.updateOne(
        {_id: _id},
        {$push: {records: recordDate}});
    return result.modifiedCount;
};

// Define remove record function
const removeResolutionRecord = async (_id, recordDate) => {
    const result = await Resolution.updateOne(
        {_id: _id},
        {$pull: {records: recordDate}});
    return result.modifiedCount;
};

export { createResolution, updateResolution, addResolutionRecord, removeResolutionRecord, deleteResolution, readResolution};