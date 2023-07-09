import {Component, Input} from '@angular/core';
import {Brand} from "../brand";


@Component({
  selector: 'app-casino-banner',
  templateUrl: './casino-banner.component.html',
  styleUrls: ['./casino-banner.component.css']
})
export class CasinoBannerComponent {
  @Input() brand!: Brand;
}
