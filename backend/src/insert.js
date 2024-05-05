const mongoose = require('mongoose');

const excelDataSchema = new mongoose.Schema({
    RollNo: String,
    Name: String,
    Email: String,
    Previlege: String,
    // Other fields...
});

const ExcelDataModel = mongoose.model('ExcelData', excelDataSchema);

// insert.js

const insertData = async (data) => {
    try {
        await ExcelDataModel.insertMany(data); // Using insertMany for bulk inserts
        return { success: true };
    } catch (error) {
        console.error('Error inserting data:', error);
        return { success: false, error };
    }
};


module.exports = { insertData };