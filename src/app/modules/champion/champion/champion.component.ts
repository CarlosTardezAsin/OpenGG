import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../service/champion.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {

  constructor(private championSv: ChampionService) { }

  async ngOnInit(): Promise<void> {
    const champ = await this.championSv.getOne('Aatrox');

    console.log(champ);
  }

}
