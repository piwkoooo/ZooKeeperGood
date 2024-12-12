const express = require('express');
const AnimalsController = require('./controllers/AnimalsController');
const app = express();

app.use(express.json());
app.use('/animals', AnimalsController);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
