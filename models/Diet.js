const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Diet = db.define("diet", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {

})


module.exports = Diet
