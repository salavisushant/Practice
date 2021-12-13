const mongoose = require('mongoose');

const gallarySchema = new mongoose.Schema({
    pictures:[{type:String,required:true},],
    user_id: {type:mongoose.Schema.Types.objectId,
        ref:user,
        required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("Gallary",gallarySchema);