//const db = require("recipe.js");
const fs = require("fs");

fs.readFile("recipes1.json", "utf8", (error, data) => {
  if (error) {
    return console.log(error);
  }
  for (const key in data) {
    console.log(key + ", " + data[key]);
    i++;
  }
});

// db.Recipe.create({
//   name: recipe.name,
//   ingredients: recipe.ingredients,
//   instructions: recipe.instructions
// });
