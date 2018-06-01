'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_user: {
        type: DataTypes.INTEGER,
      },
      id_product: {
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.TEXT,
        required: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.comment.belongsTo(models.product, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.comment.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return comment;
};
