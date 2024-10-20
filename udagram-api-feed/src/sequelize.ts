import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
  'dialectOptions': {
    ssl: {
      require: true, // Make sure SSL is required
      rejectUnauthorized: false // Accept self-signed certificates (adjust based on your SSL setup)
    }}
});
