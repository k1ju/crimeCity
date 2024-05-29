import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log(process.env.PSQL_PORT);

export const typeORMConifg: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.PSQL_HOST,
  port: parseInt(process.env.PSQL_PORT),
  username: process.env.PSQL_USER,
  password: process.env.PSQL_PW,
  database: process.env.PSQL_DATABASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
