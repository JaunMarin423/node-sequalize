import {
    Sequelize,
} from 'sequelize';

export const sequelize = new Sequelize(
    'projectsdb2',
    'postgres',
    'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres',
    // loging: false,
})