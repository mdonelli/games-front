import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Game} from "../game";
import {GameService} from "../game.service";

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {
  brandid!: number;
  country: string = 'The United Kingdom';
  games: Game[] = [];
  categories: string[] = [];
  providers: string[] = [];
  isShowingProviders: boolean = false;
  providerFilter: string | null = null;
  categoryFilter: string | null = null;
  activeGame: Game | null = null;

  constructor(private route: ActivatedRoute, private gameService: GameService) {
  }

  ngOnInit() {
    this.brandid = Number(this.route.snapshot.paramMap.get('brandid'));
    this.getGames();
  }

  getGames() {
    this.games = [];
    this.gameService.getGames(this.brandid, this.country).subscribe((data: Game[]) => {
      this.games = data;
      this.categories = this.extractCategories(data);
      this.providers = this.extractProviders(data);
      this.resetSelection();
    });
  }

  extractCategories(data: Game[]) {
    return [...new Set(data.map((game: Game) => game.brand_category ))] as unknown as string[];
  }

  extractProviders(data: Game[]) {
    return [...new Set(data.map((game: Game) => game.provider_name ))] as unknown as string[];
  }

  resetSelection() {
    this.isShowingProviders = false;
    this.providerFilter = null;
    this.categoryFilter = this.categories.indexOf(this.categoryFilter || '') > 0 ? this.categoryFilter : null;
    this.activeGame = null;
  }

  onChangeCounty(value: string) {
    this.country = value;
    this.getGames();
  }

  onChangeCategory(value: string | null) {
    this.categoryFilter = value;
    this.providerFilter = null;
    this.isShowingProviders = false;
    this.activeGame = null;
  }

  onShowProviders() {
    this.categoryFilter = null;
    this.providerFilter = null;
    this.isShowingProviders = true;
    this.activeGame = null;
  }

  onChangeProvider(value: string) {
    this.categoryFilter = null;
    this.providerFilter = value;
    this.isShowingProviders = false;
    this.activeGame = null;
  }

  onGameLaunch(value: Game) {
    this.activeGame = value;
    console.log('game launched:', value.launchcode);
  }

  onStopPlaying() {
    this.activeGame = null;
  }
}
