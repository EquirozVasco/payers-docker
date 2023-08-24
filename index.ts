import 'reflect-metadata';
import app from './app';
import {AppDataSource} from './db';

async function main (){
    await AppDataSource.initialize();
    app.listen(3000);
    console.log('Server is listening on port', 3000);
}

main();