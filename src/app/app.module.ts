import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasinoSelectorComponent } from './casino-selector/casino-selector.component';
import { CasinoBannerComponent } from './casino-banner/casino-banner.component';
import { CasinoComponent } from './casino/casino.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { GamesContainerComponent } from './games-container/games-container.component';
import { DisplayPipe } from './display.pipe';
import { LoaderComponent } from './loader/loader.component';
import { RunningGameComponent } from './running-game/running-game.component';
import { ProvidersComponent } from './providers/providers.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HotGameComponent } from './hot-game/hot-game.component';
import { NewGameComponent } from './new-game/new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CasinoSelectorComponent,
    CasinoBannerComponent,
    CasinoComponent,
    CountrySelectorComponent,
    GamesContainerComponent,
    DisplayPipe,
    LoaderComponent,
    RunningGameComponent,
    ProvidersComponent,
    ToolbarComponent,
    HotGameComponent,
    NewGameComponent
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
