const Things = require('../models/thing.model');    


module.exports.createOneThing=(req,res)=>{
    Things.create(req.body)
    .then((thing)=>res.json({thing}))
    .catch((err)=>console.log(err))
}

module.exports.findAll=(req,res)=>{
    Things.find()
        .then(thing =>{
            res.json({thing})
        } )
        .catch((err)=>console.log(err))
}

module.exports.findOneThing=(req,res)=>{
    Things.findOne({_id:req.params.id})
    .then((thing)=>res.json({thing}))
    .catch((err)=>console.log(err))
}
module.exports.updateOne=(req,res)=>{
    Things.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((thing)=>res.json({thing}))
    .catch((err)=>console.log(err))
}


module.exports.deleteOneThing=(req,res)=>{
    Things.deleteOne({_id: req.params.id})
    .then(thing => res.json({thing}) )
    .catch((err)=> console.log(err))}