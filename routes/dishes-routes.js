const db = require("../models");
const { Sequelize } = require("../models");
const Op = Sequelize.Op;

module.exports = function(app) {
  const dishes = [
    {
      dishName: "Cheeseburger",
      ingredients: ["ground meat", "buns"],
      instructions: "grill meat, throw it on some buns. yum."
    },
    {
      dishName: "hotdog",
      ingredients: ["dogs", "buns"],
      instructions: "grill dog, throw it on some buns. also yum."
    }
  ];

  app.get("/api/instructions", (req, res) => {
    res.render("instructions", dishes[0]);
  });

  app.get("/api/recipe/:name", (req, res) => {
    db.Recipe.findAll({
      where: {
        name: {
          [Op.ilike]: "%" + req.params.name + "%"
        }
      }
    }).then(dbRecipe => {
      res.json(dbRecipe);
    });
  });
};
