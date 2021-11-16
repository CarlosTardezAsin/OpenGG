import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Champion } from 'src/app/interfaces/champion/champion';
import { PageChampion } from 'src/app/interfaces/champion/pagechampion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Champion[]> {
    const url: string = 'https://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion.json';
    const pageChamp: PageChampion = await this.http.get<PageChampion>(url).toPromise();

    return Object.values(pageChamp.data);
  }

  async getOne(champName: string): Promise<Champion> {
    const url: string = 'https://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion/' + champName + '.json';
    const pageChamp: PageChampion = await this.http.get<PageChampion>(url).toPromise();
    const champ: Champion = Object.values(pageChamp.data)[0];

    return champ;
  }

}
