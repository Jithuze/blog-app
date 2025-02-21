const express = require("express");
const cors = require("cors");
const BlogModel = require("./model"); 
require("./connection"); 

const app = express();
const PORT = 3001; 

app.use(express.json());
app.use(cors());


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching data"); 
  }
});


app.post("/add", async (req, res) => {
  try {
    let data = req.body;
    let newBlog = new BlogModel(data);
    await newBlog.save();
    res.send("Data added successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding data"); 
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});