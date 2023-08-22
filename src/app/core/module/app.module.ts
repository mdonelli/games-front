import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../component/app/app.component';
import { CasinoSelectorComponent } from '../../features/brands/pages/casino-selector/casino-selector.component';
import { CasinoBannerComponent } from '../../features/brands/components/casino-banner/casino-banner.component';
import { CasinoComponent } from '../../features/brands/pages/casino/casino.component';
import { CountrySelectorComponent } from '../../features/brands/components/country-selector/country-selector.component';
import { GamesContainerComponent } from '../../features/brands/components/games-container/games-container.component';
import { DisplayPipe } from '../../shared/pipes/display-pipe/display.pipe';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { RunningGameComponent } from '../../features/brands/components/running-game/running-game.component';
import { ProvidersComponent } from '../../features/brands/components/providers/providers.component';
import { ToolbarComponent } from '../../features/brands/components/toolbar/toolbar.component';
import { HotGameComponent } from '../../features/brands/components/hot-game/hot-game.component';
import { NewGameComponent } from '../../features/brands/components/new-game/new-game.component';

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
