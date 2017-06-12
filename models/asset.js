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
            allowNull: false,
            isDate: true, 
            
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            isDecimal: true,

        },

        info: {
            type: DataTypes.TEXT,
        },

        asset_image: {
            type: DataTypes.STRING,
        }


    });

    return Asset;
};