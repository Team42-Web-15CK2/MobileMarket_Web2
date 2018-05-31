'use strict';
module.exports = (DataTypes, DataTypes) => {
  var comment = DataTypes.define('comment', {
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
  };
  return comment;
};
