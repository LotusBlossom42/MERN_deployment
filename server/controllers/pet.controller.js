const {Pet} = require("../models/pet.model")

// module.exports.test = (req,res) => {
//     res.json('Hello, World! -Love ServerSide')
// }

//CREATE /
module.exports.newPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}

//READ ALL /dashboard
//Object.find() method returns array
module.exports.allPets = (req, res) => {
    Pet.find().sort({type: 1})
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err))
}

//READ ONE /products/:id
//Object.findOne({}) method returns Object
module.exports.onePet = (req, res) => {
    const {id} = req.params
    Pet.findOne({_id: id})
        .then(onePet => res.json(onePet))
        .catch(err => res.json(err))
}

// //UPDATE
module.exports.updatePet = (req, res) =>  {    
    const {id} = req.params                      
    //MUST INCLUDE new:true sends updated obj back runValidators:true validates updated data - new:true and runValidators should be contained within same object
    Pet.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
}

// //DELETE
module.exports.deletePet = (req, res) => {
    const {id} = req.params

    Pet.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => console.log(res.json(err)))
        
}