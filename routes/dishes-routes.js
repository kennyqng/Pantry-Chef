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

<<<<<<< HEAD
  app.get("/api/recipe/:id", (req, res) => {
    db.Recipe.findAll({
      where: {
        name: {
          [Op.ilike]: "%" + req.name + "%"
        }
      }
    }).then(dbTodo => {
      res.json(dbTodo);
    });
=======
  app.get("/results", (req, res) => {
    res.render("results", dishes[0]);
>>>>>>> eafad8cde3bcad59b8cf9b85eec252a86c55f8e5
  });
};
