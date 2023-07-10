const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        // id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // title column
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // content column
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // user_id column (references user model's id column)
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    // configuration options
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;