import { values } from 'lodash';

export const selectAllStartups = ({ startup }) => values(startup.entities);