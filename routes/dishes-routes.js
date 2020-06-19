const db = require("../models");
const { sequelize } = require("../models");
const { Op } = require("sequelize");

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

  app.get("/api/:dish", (req, res) => {
    db.Recipe.findAll({
      limit: 1,
      where: {
        title: req.params.dish
      }
    }).then(dbRecipe => {
      const data = [];
      dbRecipe.forEach(element => {
        data.push(element.dataValues);
      });
      console.log(data);
      res.render("instructions", { data });
    });
  });

  app.get("/:name", (req, res) => {
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

  app.post("/search/ingredients/:ingredients", (req, res) => {
    console.log(req.params);
    const queryArr = req.body.ingredients.map(a => ({
      [Op.like]: `%${a}%`
    }));
    console.log(queryArr);
    db.Recipe.findAll({
      limit: 5,
      where: {
        ingredients: {
          [Op.and]: queryArr
        }
      }
    }).then(dbRecipe => {
      // const data = [];
      // dbRecipe.forEach(element => {
      //   data.push(element.dataValues);
      // });
      console.log(dbRecipe);
      // console.log(data);
      // res.render("results", { data });
    });
  });
};
