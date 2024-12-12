const express = require('express');
const router = express.Router();
const AnimalsService = require('../services/AnimalsService');

router.get('/', (req, res) => {
    const animals = AnimalsService.getAllAnimals();
    res.json(animals);
});

router.get('/:id', (req, res) => {
    const animal = AnimalsService.getAnimalById(req.params.id);
    if (!animal) {
        return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
});

router.get('/endangered', (req, res) => {
    const endangeredAnimals = AnimalsService.getEndangeredAnimals();
    res.json(endangeredAnimals);
});


router.post('/', (req, res) => {
    const newAnimal = AnimalsService.addAnimal(req.body);
    res.status(201).json(newAnimal);
});

router.put('/:id', (req, res) => {
    const updatedAnimal = AnimalsService.updateAnimal(req.params.id, req.body);
    if (!updatedAnimal) {
        return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(updatedAnimal);
});

router.delete('/:id', (req, res) => {
    const deleted = AnimalsService.deleteAnimal(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'Animal not found' });
    }
    res.status(204).send();
});

module.exports = router;
