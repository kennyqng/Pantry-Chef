const db = require("../models");
const recipes = [
  Object.values(require("./recipes1.json")),
  Object.values(require("./recipes2.json")),
  Object.values(require("./recipes3.json")),
  Object.values(require("./recipes4.json")),
  Object.values(require("./recipes5.json"))
];

//

const seedOne = async data => {
  try {
    for (const recipe of data.map(a => ({
      ...a,
      ingredients: JSON.stringify(a.ingredients)
    }))) {
      await db.Recipe.create(recipe);
    }
  } catch (err) {
    console.log(err);
  }
};

const runSeeds = async () => {
  for (let i = 0; i < recipes.length; i++) {
    await seedOne(recipes[i]);
  }
};

runSeeds();
