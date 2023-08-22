import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {
  @Input() providers: string[] = [];
  @Output() providerSelectedEvent = new EventEmitter<string>();

  providerSelected(value: string) {
    this.providerSelectedEvent.emit(value);
  }
}
