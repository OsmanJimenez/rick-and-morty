import { version_env } from 'src/environments/version';

export const environment = {
  production: true,
  apiUrl: 'https://rickandmortyapi.com/api',
  version: version_env.number + ' - l',
  date: version_env.date,
};
