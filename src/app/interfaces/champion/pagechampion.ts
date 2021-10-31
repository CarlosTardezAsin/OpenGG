import { Champion } from './champion';

export interface PageChampion {
  type: string;
  format: string;
  version: string;
  data: { [key: string]: Champion };
}
