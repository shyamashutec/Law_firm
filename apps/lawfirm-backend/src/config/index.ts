import * as configuration from './config.json';
import convict from 'convict';
const DB_HOST: string = configuration.DB_HOST;

const config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development'],
    default: 'development',
  },
  cluster: {
    workerCount: {
      doc: 'No of worker Thread',
      format: Number,
      default: 4,
    },
  },
  server: {
    port: {
      doc: 'HTTP port to bind',
      format: 'port',
      default: 3000,
      env: 'PORT',
    },
  },
  database: {
    host: {
      doc: 'connection string for mongoDB',
      format: String,
      default: DB_HOST,
      env: 'DB_HOST',
    },
  },
});

export { config };
