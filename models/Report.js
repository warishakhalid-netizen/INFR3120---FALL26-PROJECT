// Importing mongoose 
const mongoose = require('mongoose');

// Schema for documents
let reportModel= mongoose.Schema(
    {
        url: String,
        lurecategory: String,
        description:String,
        riskstatus:String,
        submissiondate:Date
    },
    {   
        collection: "linkReports"
    }
);
module.exports=mongoose.model('Report', reportModel)

