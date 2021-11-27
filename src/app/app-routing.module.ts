import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './modules/champion/champion-list/champion-list.component';
import { ChampionComponent } from './modules/champion/champion/champion.component';
import { SummonerComponent } from './modules/summoner/summoner/summoner.component';

const routes: Routes = [
  { path: 'championlist', component: ChampionListComponent },
  { path: 'champion', component: ChampionComponent },
  { path: 'summoner', component: SummonerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
