const ThingController = require('../controllers/thing.controller'); 

module.exports=(app)=>{
    app.post('/thing', ThingController.createOneThing); 
    app.get('/thing', ThingController.findAll); 
    app.get("/things/:id",ThingController.findOneThing);
    app.put("/thing/:id",ThingController.updateOne)
    app.delete("/thing/:id",ThingController.deleteOneThing)
}
