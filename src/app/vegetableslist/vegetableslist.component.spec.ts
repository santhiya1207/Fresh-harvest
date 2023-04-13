import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableslistComponent } from './vegetableslist.component';

describe('VegetableslistComponent', () => {
  let component: VegetableslistComponent;
  let fixture: ComponentFixture<VegetableslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetableslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
