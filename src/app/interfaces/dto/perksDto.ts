import { PerkStatsDto } from "./perkStatsDto";
import { PerkStyleDto } from "./perkStyleDto";

export interface PerksDto {
  statPerks: PerkStatsDto;
  styles: PerkStyleDto[];
}
