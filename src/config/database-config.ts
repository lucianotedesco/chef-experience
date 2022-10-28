import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize('chef_experience_db', 'postgres', 'passw0rd', {
    host: 'localhost',
    dialect: 'postgres',
    models: [__dirname + '/models']
});