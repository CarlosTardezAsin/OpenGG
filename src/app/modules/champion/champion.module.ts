import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChampionService } from './service/champion.service';
import { ChampionComponent } from './champion/champion.component';
import { ChampionListComponent } from './champion-list/champion-list.component';



@NgModule({
  declarations: [
    ChampionComponent,
    ChampionListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ChampionService
  ]
})
export class ChampionModule { }
