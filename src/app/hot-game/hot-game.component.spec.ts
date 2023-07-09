import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotGameComponent } from './hot-game.component';

describe('HotGameComponent', () => {
  let component: HotGameComponent;
  let fixture: ComponentFixture<HotGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotGameComponent]
    });
    fixture = TestBed.createComponent(HotGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
