import { BanDto } from "./banDto";
import { ObjectivesDto } from "./objectivesDto";

export interface TeamDto {
  bans: BanDto[];
  objectives: ObjectivesDto;
  teamId: number;
  win: boolean;
}
