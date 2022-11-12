const { DataTypes } = require('sequelize');
const { db } = require("../config/db")
const Diet = require("./Diet");

const Recipe = db.define("recipe", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    healthScore: {
        type: DataTypes.INTEGER,
        // allowNull:false
    },
    overview: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    steps: {
        type: DataTypes.TEXT,
        // allowNull:false
    },
    image: {
        type: DataTypes.STRING
    }
})


Diet.belongsToMany(Recipe, { through: "diet_recipes" })
Recipe.belongsToMany(Diet, { through: "diet_recipes" })


module.exports = Recipe
