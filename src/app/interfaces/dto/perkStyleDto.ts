import { PerkStyleSelectionDto } from './perkStyleSelectionDto';

export interface PerkStyleDto {
  description: string;
  selections: PerkStyleSelectionDto[];
  style: string;
}
