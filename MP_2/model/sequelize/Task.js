const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Task = sequelize.define('Task', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    taskName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    taskType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    taskDescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deadline: {
        type: Sequelize.DATE,
        allowNull: false
    },
    taskStatus: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Task;