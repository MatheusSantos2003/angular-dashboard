import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const DatabaseConnection = new DataSource({
  type: 'postgres',
  host: process.env.DB_URL || 'localhost',
  port: 5432,
  username: process.env.DB_USER || 'test',
  password: process.env.DB_PASSWORD || 'test',
  database: process.env.DB_DEFAULT_DB || 'test',
  synchronize: true,
  logging: false,
  entities: ['./entities/*.ts'],
  migrations: [],
  subscribers: [],
});
