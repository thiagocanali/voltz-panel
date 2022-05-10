import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsComponent } from './pages/logs/logs.component';
import { HomeComponent } from './pages/home/home.component';
import { ValorantComponent } from './pages/stats/valorant/valorant.component';
import { Tf2Component } from './pages/stats/tf2/tf2.component';
import { CsgoComponent } from './pages/stats/csgo/csgo.component';
import { LolComponent } from './pages/stats/lol/lol.component';
import { HttpClientModule } from '@angular/common/http';
import { AlgoPraMimComponent } from './pages/algo-pra-mim/algo-pra-mim.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    HomeComponent,
    ValorantComponent,
    Tf2Component,
    CsgoComponent,
    LolComponent,
    AlgoPraMimComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
