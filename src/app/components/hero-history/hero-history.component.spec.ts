import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHistoryComponent } from './hero-history.component';

describe('HeroHistoryComponent', () => {
  let component: HeroHistoryComponent;
  let fixture: ComponentFixture<HeroHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
