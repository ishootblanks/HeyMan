import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesItemComponent } from './ratesItem.component';

describe('RatesItemComponent', () => {
  let component: RatesItemComponent;
  let fixture: ComponentFixture<RatesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
