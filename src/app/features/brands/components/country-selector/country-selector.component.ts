import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent {
  @Input() country!: string;
  @Output() countryChangeEvent = new EventEmitter<string>();
  @ViewChild('flags') flags!: ElementRef;

  countries = [{
    name: 'The United Kingdom',
    src: '/assets/flags/uk.png'
  }, {
    name: 'Germany',
    src: '/assets/flags/germany.png'
  }, {
    name: 'France',
    src: '/assets/flags/france.png'
  }, {
    name: 'Italy',
    src: '/assets/flags/italy.png'
  }];

  changeCountry(value: string) {
    const isSandwich = getComputedStyle(this.flags.nativeElement).getPropertyValue('--sandwich') == 'true';
    if (!isSandwich) {
      this.countryChangeEvent.emit(value);
      return;
    }

    if (this.flags.nativeElement.classList.contains('expanded')) {
      this.countryChangeEvent.emit(value);
    }
    this.flags.nativeElement.classList.toggle('expanded');
  }
}
