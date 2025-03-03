const mongoose = require('mongoose'); 

const taskSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true
        },
        priority: {  
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Task', taskSchema);
