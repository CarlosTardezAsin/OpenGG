import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../service/champion.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit {

  constructor(private championSv: ChampionService) { }

  async ngOnInit() {
    console.log(await this.championSv.getAll());
  }

}
