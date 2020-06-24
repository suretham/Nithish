
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const customerapp = require("./routes/customer.routes.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//Customer Microservice
customerapp(app);

app.listen(3200, () => console.log('Server running on port 3200'))