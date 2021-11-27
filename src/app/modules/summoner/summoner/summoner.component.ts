import { Component, OnInit } from '@angular/core';
import { SummonerService } from '../service/summoner.service';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {

  constructor(private summonerSv: SummonerService) { }

  async ngOnInit(): Promise<void> {
    const puuid = await this.summonerSv.getSummonerPuuid('charli junior');

    const matchsIds = await this.summonerSv.getMathcsIds(puuid);

    matchsIds.forEach(async (id) => {
      console.log(await this.summonerSv.getMatchInfo(id));
    });
  }

}
