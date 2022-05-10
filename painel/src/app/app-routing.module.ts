import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoPraMimComponent } from './pages/algo-pra-mim/algo-pra-mim.component';
import { HomeComponent } from './pages/home/home.component';
import { LogsComponent } from './pages/logs/logs.component';
import { CsgoComponent } from './pages/stats/csgo/csgo.component';
import { LolComponent } from './pages/stats/lol/lol.component';
import { Tf2Component } from './pages/stats/tf2/tf2.component';
import { ValorantComponent } from './pages/stats/valorant/valorant.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  // { path: '**', component: PageNotFoundComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'algo-pra-mim', component: AlgoPraMimComponent },
  { path: 'valorant', component: ValorantComponent },
  { path: 'tf2', component: Tf2Component },
  { path: 'lol', component: LolComponent },
  { path: 'csgo', component: CsgoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
