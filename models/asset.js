module.exports = function(sequelize, DataTypes) {
    var Asset = sequelize.define("Asset", {

        category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        make: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            }
        },

        model: {
            type: DataTypes.TEXT, 
        },

        serial_num: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }   
        },

        bought: {
            type: DataTypes.DATEONLY,
            allowNull: false
            validate: {
                len: [2]
            }
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
            validate: {
                len: [2]
            }
        },

        info: {
            type: DataTypes.TEXT,
        }
   
    });

    return Asset;
};