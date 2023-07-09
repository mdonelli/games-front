import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoSelectorComponent } from './casino-selector.component';

describe('CasinoSelectorComponent', () => {
  let component: CasinoSelectorComponent;
  let fixture: ComponentFixture<CasinoSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasinoSelectorComponent]
    });
    fixture = TestBed.createComponent(CasinoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
