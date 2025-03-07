module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
        "users",
        {
            ...require("./cors")(Sequelize, DataTypes),

            name: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: null,
            },

        },
        {
            tableName: "users",
        }
    );
};
