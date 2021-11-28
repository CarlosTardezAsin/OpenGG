import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummonerComponent } from './summoner/summoner.component';
import { SummonerService } from './service/summoner.service';



@NgModule({
  declarations: [
    SummonerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SummonerComponent
  ],
  providers: [
    SummonerService
  ]
})
export class SummonerModule { }
