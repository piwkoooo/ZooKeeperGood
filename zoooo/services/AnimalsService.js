const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/zoo.json');

function readData() {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

const AnimalsService = {
    getAllAnimals: () => readData(),
    getAnimalById: (id) => readData().find(animal => animal.id === parseInt(id)),
    getEndangeredAnimals: () => readData().filter(animal => animal.isEndangered),
    addAnimal: (animalData) => {
        const data = readData();
        const newAnimal = { id: Date.now(), ...animalData };
        data.push(newAnimal);
        writeData(data);
        return newAnimal;
    },
    updateAnimal: (id, updatedData) => {
        const data = readData();
        const index = data.findIndex(animal => animal.id === parseInt(id));
        if (index === -1) return null;
        data[index] = { ...data[index], ...updatedData };
        writeData(data);
        return data[index];
    },
    deleteAnimal: (id) => {
        const data = readData();
        const index = data.findIndex(animal => animal.id === parseInt(id));
        if (index === -1) return false;
        data.splice(index, 1);
        writeData(data);
        return true;
    },
};

module.exports = AnimalsService;
