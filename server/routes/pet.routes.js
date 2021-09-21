const PetController = require('../controllers/pet.controller')

module.exports = app => {
    //:variable - what we pull out of requestParams
    app.post("/api/pets", PetController.newPet)
    app.get("/api/pets", PetController.allPets)
    app.get("/api/pets/:id", PetController.onePet)
    app.put("/api/pets/:id", PetController.updatePet)
    app.delete("/api/pets/:id", PetController.deletePet)
}