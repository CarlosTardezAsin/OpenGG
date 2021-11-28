import { ParticipantDto } from "./participantDto";
import { TeamDto } from "./teamDto";

export interface InfoDto {
  gameCreation:       number;
  gameDuration:       number;
  gameEndTimestamp:   number;
  gameId:             number;
  gameMode:           string;
  gameName:           string;
  gameStartTimestamp: number;
  gameType:           string;
  gameVersion:        string;
  mapId:              number;
  participants:       ParticipantDto[];
  platformId:         string;
  queueId:            number;
  teams:              TeamDto[];
  tournamentCode:     string;
}
