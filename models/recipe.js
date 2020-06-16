module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      default: "Chicken Parm"
    },
    ingredients: {
      type: DataTypes.TEXT,
      default: "Chicken"
    },
    instructions: {
      type: DataTypes.TEXT,
      default: "['cook chicken']"
    },
    picture_link: {
      type: DataTypes.STRING,
      default: "www.google.com"
    }
  });
  return Recipe;
};
