import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenlistComponent } from './greenlist.component';

describe('GreenlistComponent', () => {
  let component: GreenlistComponent;
  let fixture: ComponentFixture<GreenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
