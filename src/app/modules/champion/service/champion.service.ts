import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Champion, ChampionList } from 'src/app/interfaces/champion/champion';
import { PageChampion } from 'src/app/interfaces/champion/pagechampion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  urls = {
    urlDocs: environment.API_URL_DOCS
  };

  constructor(private http: HttpClient) { }

  async getAll(): Promise<ChampionList[]> {
    const url: string = this.urls.urlDocs + 'data/en_US/champion.json';
    const pageChamp: PageChampion = await this.http.get<PageChampion>(url).toPromise();

    return Object.values(pageChamp.data);
  }

  async getOne(champName: string): Promise<Champion> {
    const url: string = this.urls.urlDocs + 'data/en_US/champion/' + champName + '.json';
    const pageChamp: PageChampion = await this.http.get<PageChampion>(url).toPromise();
    const champ: Champion = Object.values(pageChamp.data)[0];

    return champ;
  }

}
