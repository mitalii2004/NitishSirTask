module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
        "product",
        {
            ...require("./cors")(Sequelize, DataTypes),

            product: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null,
            },


        },
        {
            tableName: "product",
        }
    );
};
