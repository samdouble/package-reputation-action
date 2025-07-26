import axios from 'axios';
import { NpmRegistrySearchResults } from './types';

export const getNpmRegistryResults = (packageName: string) => {
  return axios.get<NpmRegistrySearchResults>(`https://registry.npmjs.org/-/v1/search?text=${packageName}&size=1`)
    .then(res => res.data);
};
