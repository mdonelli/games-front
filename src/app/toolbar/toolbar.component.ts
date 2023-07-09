import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() categories!: string[];
  @Input() categoryFilter!: string | null;
  @Input() providerFilter!: string | null;
  @Input() isShowingProviders!: boolean;
  @Output() changeCategoryEvent = new EventEmitter<string | null>();
  @Output() showProvidersEvent = new EventEmitter();

  changeCategory(value: string | null) {
    this.changeCategoryEvent.emit(value);
  }

  showProviders() {
    this.showProvidersEvent.emit();
  }
}
