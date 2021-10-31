import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './modules/champion/champion-list/champion-list.component';

const routes: Routes = [
  { path: 'championlist', component: ChampionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
