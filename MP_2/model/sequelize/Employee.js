const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Employee = sequelize.define('Employee', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    empRole: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Employee;