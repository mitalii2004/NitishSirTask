const Sequelize = require("sequelize")
const sequelize = require("../dbConnection").sequelize

module.exports = {

    userModel: require("./userModel")(Sequelize, sequelize, Sequelize.DataTypes),
    contactUsModel: require("./contactUsModel")(Sequelize, sequelize, Sequelize.DataTypes),
    productModel: require("./productModel")(Sequelize, sequelize, Sequelize.DataTypes),

}