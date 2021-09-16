const mongoose = require("mongoose");



//Schema/table of database
const ContactSchema = mongoose.Schema(
{
 first_name : {
     type:String,
     require:true
 },
 last_name : {
    type:String,
    require:true
},
phone : {
    type:String,
    require:true
}

}
)

const contact = module.exports = mongoose.model("Contact", ContactSchema);