import { Image } from './image';
import { Info } from './info';
import { Passive } from './passive';
import { Skin } from './skin';
import { Spell } from './spell';

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  skins: Skin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: Info;
  stats: { [key: string]: number };
  spells: Spell[];
  passive: Passive;
}

export type ChampionList = Omit<
  Champion,
  'skins' | 'lore' | 'allytips' | 'enemytips' | 'partytype' | 'spells' | 'passive'
>;
