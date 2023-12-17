const express = require('express');
const mongoose = require('mongoose');
const asyncHandler =require("express-async-handler");
const bodypraser =require('body-parser');
let app = express();

// Connect server to the local MongoDB server
mongoose.connect("mongodb://0.0.0.0:27017/MoviUP", (err) => {
    if (!err) console.log('DB now is connected');
    else console.log('you have error');
});

// Schema
// Create schema_1 ==> Home schema
const homeSchema = new mongoose.Schema({
    categories: String,
    
});

// Convert schema_1 to model(class) <> collection
let homeModle = new mongoose.model('Home', homeSchema);

// Create schema_2 ==> categories schema
const categoriesSchema = new mongoose.Schema({
    section_name: String,
});

// Convert schema_2 to model(class) <> collection
let categoriesModle = new mongoose.model('categories', categoriesSchema);






// Create new documents for the category collection
let actionCategories = new categoriesModle({
    section_name: 'avatar'
}).save();

let science_fictionCategories = new categoriesModle({
    section_name: 'inter stellar'
}).save();

let animationCategories = new categoriesModle({
    section_name: 'colors of pain'
}).save();

let dramaCategories = new categoriesModle({
    section_name: 'inside women'
}).save();

let mysteryCategories = new categoriesModle({
    section_name: 'meet the brothers'
}).save();

let horrorCategories = new categoriesModle({
    section_name: 'green magic world'
}).save();

// Get all categories
//app.get('/categories', async (req, res) => {
 //   try {
   //     let categories = await categoriesModle.find();
     //   res.status(200).json(categories);
    //} catch (error) {
      //  console.error(error);
        //res.status(500).send('Internal Server Error');
    //}
//});
app.get('/asyncHandler',async (req, res) => {
        let categories = await categoriesModle.find();
        res.status(200).json(categories);
    }
);
app.get('/body parser',async (req, res) => {
    let categories = await categoriesModle.find();
    res.status(200).json(section_name);
}
);


app.get('/', (req, res) => {
    res.send("Welcome");
});

app.listen(8080, function () {
    console.log('Server is now open');
});