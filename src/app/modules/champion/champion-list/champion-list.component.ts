import { Component, OnInit } from '@angular/core';
import { ChampionList } from 'src/app/interfaces/champion/champion';
import { ChampionService } from '../service/champion.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit {

  champs!: ChampionList[];

  constructor(private championSv: ChampionService) { }

  async ngOnInit(): Promise<void> {
    this.champs = await this.championSv.getAll();

    console.log(this.champs);
  }
}
