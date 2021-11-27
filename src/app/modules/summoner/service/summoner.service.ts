import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SummonerDto } from 'src/app/interfaces/dto/summonerDto';
import { MatchDto } from 'src/app/interfaces/dto/matchDto';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {

  constructor(private http: HttpClient) { }

  async getSummonerPuuid(summonerName: string): Promise<string> {
    const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + environment.KEY_API;

    const summoner = await this.http.get<SummonerDto>(url).toPromise();

    return summoner.puuid;
  }

  async getMathcsIds(summonerPuuid: string): Promise<string[]> {
    const url = 'https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/' + summonerPuuid + '/ids?start=0&count=20&api_key=' + environment.KEY_API;

    return this.http.get<string[]>(url).toPromise();
  }

  async getMatchInfo(matchId: string): Promise<MatchDto> {
    const url = 'https://europe.api.riotgames.com/lol/match/v5/matches/' + matchId + '?api_key=' + environment.KEY_API;

    return this.http.get<MatchDto>(url).toPromise();
  }
}
