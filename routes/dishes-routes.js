const db = require("../models");
const { sequelize } = require("../models");

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
      limit: 5,
      where: {
        title: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("title")),
          "like",
          "%" + req.params.name.toLowerCase() + "%"
        )
      }
    }).then(dbRecipe => {
      const data = [];
      dbRecipe.forEach(element => {
        data.push(element.dataValues);
      });
      console.log(data);
      res.render("results", { data });
    });
  });
};
