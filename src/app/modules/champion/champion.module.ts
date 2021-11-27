import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionService } from './service/champion.service';
import { ChampionComponent } from './champion/champion.component';
import { ChampionListComponent } from './champion-list/champion-list.component';



@NgModule({
  declarations: [
    ChampionComponent,
    ChampionListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChampionListComponent,
    ChampionComponent
  ],
  providers: [
    ChampionService
  ]
})
export class ChampionModule { }
