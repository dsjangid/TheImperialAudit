import bl from './british-library.json';
import nai from './national-archives-india.json';
import wbsa from './west-bengal-archives.json';

export const REPOSITORIES = [bl, nai, wbsa];

export function getRepositoryById(id: string) {
  return REPOSITORIES.find((r) => r.id === id);
}
