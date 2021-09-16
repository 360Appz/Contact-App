
const express = require("express");
const router = express.Router();

var Contact = require("../models/contact");

//Ensure POSTMAN GET is from "contacts"


//Data retrieval - Read operation
router.get('/contacts',(req,res,next)=>
{
     Contact.find(function(err, contact)
     {
       res.json(contact); //After finding table, responds to client back in JSON format
     });
});

//Add contacts - Create operation
router.post( '/contact', (req,res,next)=>
{
  let newContact = new Contact({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    phone : req.body.phone

  });

  newContact.save((err, contact)=>{
    if(err)
    {
      res.json({msg:"Failed to add contact"});
    }
    else
    {
      res.json({msg:"Contact added"});
    }

  });

});

//Delete contacts
router.delete( '/contact/:id', (req,res,next)=>
{
  Contact.remove({_id:req.params.id}, function(err, result)
  {
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(result);
    }

  });
});



//Navigates to the package.json and finds the app.js to start the server
module.exports = router;