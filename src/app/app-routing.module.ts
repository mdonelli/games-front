import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CasinoComponent} from "./casino/casino.component";
import {CasinoSelectorComponent} from "./casino-selector/casino-selector.component";

const routes: Routes = [
  { path: ':brandid', component: CasinoComponent },
  { path: '', component: CasinoSelectorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
