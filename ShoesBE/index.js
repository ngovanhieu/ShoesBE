const express = require("express");
const mongoose = require("mongoose");
const ProductRoute = require("./routes/products")
const bodyParser = require('body-parser')

const connection_string =
  "mongodb+srv://admin:1111@cluster0.i2eye5b.mongodb.net/test";

mongoose.connect(connection_string,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

const app = express();

app.use(express.json());

const PORT = 5000;

app.listen(PORT || 3000, () => {
  console.log(`server iss running on port ${PORT}`);
});

database.on("error", (error) => {
  console.log(error);
});

database.on("connected", () => {
  console.log("database Connected");
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('', ProductRoute)
