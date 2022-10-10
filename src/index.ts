import app from './app';
import {sequelize} from './database/database';

import './models/project'
import './models/task'

async function main() {
    try {
        await sequelize.sync({force: true});
        app.listen(4000);
        console.log(`Server is listening on port`, 4000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
