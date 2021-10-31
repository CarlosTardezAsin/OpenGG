import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageChampion } from 'src/app/interfaces/champion/pagechampion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<PageChampion> {
    return this.http.get<PageChampion>('https://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion.json').toPromise();
  }
}
