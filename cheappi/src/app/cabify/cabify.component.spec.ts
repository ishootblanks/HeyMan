import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabifyComponent } from './cabify.component';

describe('CabifyComponent', () => {
  let component: CabifyComponent;
  let fixture: ComponentFixture<CabifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
