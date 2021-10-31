import { DataChampion } from './data';

export interface PageChampion {
  type: string;
  format: string;
  version: string;
  data: DataChampion;
}
