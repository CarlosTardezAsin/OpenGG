import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Champion } from 'src/app/interfaces/champion/champion';
import { PageChampion } from 'src/app/interfaces/champion/pagechampion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<{ [key: string]: Champion }> {
    const url = 'https://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion.json';
    const page = await this.http.get<PageChampion>(url).toPromise();

    return page.data;
  }
}
