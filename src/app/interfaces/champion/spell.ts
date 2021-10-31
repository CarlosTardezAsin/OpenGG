import { Image } from './image';
import { LevelTip } from './leveltip';

export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: LevelTip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  effect: Array<number[] | null>;
  effectBurn: Array<string | null>;
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}
