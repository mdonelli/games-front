import {Component, OnInit} from '@angular/core';
import {BrandService} from "../brand.service";
import {Brand} from "../brand";

@Component({
  selector: 'app-casino-selector',
  templateUrl: './casino-selector.component.html',
  styleUrls: ['./casino-selector.component.css']
})
export class CasinoSelectorComponent implements OnInit {

  brands!: Brand[];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((data: Brand[]) => {this.brands = data;});
  }
}
