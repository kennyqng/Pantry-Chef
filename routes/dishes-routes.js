const db = require("../models");
const { sequelize } = require("../models");
const { Op } = require("sequelize");

module.exports = function(app) {
  app.get("/api/recipe/:name", (req, res) => {
    db.Recipe.findAll({
      limit: 15,
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
  app.get("/search/ingredients", (req, res) => {
    console.log(req.query);
    const query = JSON.parse(req.query.ingredients);
    const queryArr = query.map(a => ({
      [Op.like]: `%${a.toLowerCase()}%`
    }));
    console.log(queryArr);
    db.Recipe.findAll({
      limit: 15,
      where: {
        ingredients: {
          [Op.and]: queryArr
        }
      }
    }).then(dbRecipe => {
      console.log(dbRecipe.map(a => a.dataValues));
      res.render("results", { data: dbRecipe.map(a => a.dataValues) });
      console.log(dbRecipe);
    });
  });
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
};
