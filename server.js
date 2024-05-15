const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("./models/Person");
const URI = process.env.URI;
mongoose
  .connect(URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

async function createPerson() {
  try {
    const newPerson = await Person({
      name: "Angel Flores",
      age: 30,
      favoriteFoods: ["pizza", "pasta"],
    });
    await newPerson.save();
    console.log("person was created successfully");
  } catch (error) {
    console.log(error);
  }
}
// createPerson();

async function createPersons() {
  try {
    await Person.create([
      {
        name: "Louisa Singleton",
        age: 20,
        favoriteFoods: ["moussaka", "burger"],
      },
      {
        name: "Emma Torres",
        age: 40,
        favoriteFoods: ["sushi", "ramen"],
      },
      {
        name: "Jeffrey Harrington",
        age: 25,
        favoriteFoods: ["tikka masala", "Naans"],
      },
    ]);
  } catch (error) {
    return error;
  }
}
// createPersons()
// .then(()=>console.log("persons was created successfully"))
// .catch((err)=>console.log(err));

async function getPersons() {
  try {
    const data = await Person.find({
      name: "Louisa Singleton",
    });
    console.log(data);
  } catch (error) {
    return error;
  }
}
// getPersons();

async function getPerso() {
  try {
    const data = await Person.find({
      favoriteFoods: "pasta",
    });
    console.log(data);
  } catch (error) {
    return error;
  }
}
// getPerso();

async function getPersonWithId() {
  try {
    const data = await Person.findById("6643de711e6c0381cb63cb04");
    console.log(data);
  } catch (error) {
    return error;
  }
}
//  getPersonWithId();

async function updatePersonWithId() {
  try {
    const data = await Person.findByIdAndUpdate(
      "6643de711e6c0381cb63cb04",
      { $push: { favoriteFoods: "tiramisu" } },
      { new: true }
    );
    return data;
  } catch (error) {
    return error;
  }
}

// updatePersonWithId()
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

async function deletePersonWithId() {
  try {
    const data = await Person.findByIdAndDelete("6643de711e6c0381cb63cb05");
    return "person was deleted";
    return data;
  } catch (error) {
    return error;
  }
}
// deletePersonWithId()
//  .then((data)=>console.log(data))
//  .catch((err)=>console.log(err));

Person.find()
  .sort({ age: "asc" })
  .limit(2)
  .select({ age: 0 })
  .then((data) => console.log(data));
