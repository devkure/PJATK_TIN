/*Zdefiniujemy relacje pomiędzy tabelami
Zainicjalizujemy instancję mappera, która będzie używana w naszych repozytoriach
Wymusimy synchronizację naszego modelu ze schematem bazy danych (co może spowodować utworzenie tabel)
Wstawimy przykładowe dane (warunkowo - jeśli nie istnieją już w bazie)*/

const sequelize = require('./sequelize');

const Employee = require('../../model/sequelize/Employee');
const Task = require('../../model/sequelize/Task');
const Quest = require('../../model/sequelize/Quest');

module.exports = () => {
    //Relacja klucza Employee z tabelą quest
    Employee.hasMany(Quest, { as: "quests", foreignKey: { name: 'emp_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Quest.belongsTo(Employee, { as: 'employee', foreignKey: { name: 'emp_id', allowNull: false } });

    //Relacja klucza Task z tabelą quest
    Task.hasMany(Quest, { as: "quests", foreignKey: { name: 'task_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Quest.belongsTo(Task, { as: 'tasks', foreignKey: { name: 'task_id', allowNull: false } });

    let allEmps, allTasks;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Employee.findAll();
        })
        .then(emps => {
            if (!emps || emps.length == 0) {
                return Employee.bulkCreate([
                    { fname: 'Jan', lName: 'Brzeziński', nName: 'Tobi', email: 's20414@pjwstk.edu.pl', empRole: 'Artist/Manager' },
                    { fname: 'Artur', lName: 'Kuś', nName: 'Bones', email: 'BBones1337@gmail.com', empRole: 'Artist/Animator' },
                    { fname: 'Mikołaj', lName: 'Ziółek', nName: 'Ziolek', email: 'Nieziolek21@gmail.com', empRole: 'Programmer' }
                ])
                    .then(() => {
                        return Employee.findAll();
                    });
            } else {
                return emps;
            }
        })
        .then(emps => {
            allEmps = emps;
            return Task.findAll();
        })
        .then(tasks => {
            if (!tasks || tasks.length() == 0) {
                return Task.bulkCreate([
                    { taskName: 'Enviro', taskType: 'Art', taskDescription: 'Dodać tekstury', priority: 'SHOULD', deadline: '2023-01-31', taskStatus: 'Incomplete' },
                    { taskName: 'Postacie', taskType: 'Art', taskDescription: 'Dodać model postaci', priority: 'MUST', deadline: '2023-03-31', taskStatus: 'Incomplete' },
                    { taskName: 'Movement', taskType: 'Kod', taskDescription: 'Zaimplementować movement', priority: 'MUST', deadline: '2022-06-20', taskStatus: 'Complete' }
                ])
                    .then(() => {
                        allTasks = tasks;
                        return Task.findAll();
                    });
            } else {
                return depts;
            }
        })
        .then(tasks => {
            allTasks = tasks;
            return Task.findAll();
        })
        .then(quests => {
            if (!quests || quests.length() == 0) {
                return Quest.bulkCreate([
                    { emp_id: allEmps[0]._id, task_id: allTasks[0]._id },
                    { emp_id: allEmps[1]._id, task_id: allTasks[1]._id },
                    { emp_id: allEmps[2]._id, task_id: allTasks[2]._id }
                ]);
            } else {
                return quests;
            }
        });
};