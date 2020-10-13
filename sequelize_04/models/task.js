"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Category, {
        foreignKey: "id_category",
      });
    }
  }
  Task.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      finished: DataTypes.BOOLEAN,
      id_category: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
