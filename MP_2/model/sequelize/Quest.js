const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Quest = sequelize.define('Quest', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    task_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Quest;