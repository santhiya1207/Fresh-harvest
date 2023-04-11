import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdvantageComponent } from './category-advantage.component';

describe('CategoryAdvantageComponent', () => {
  let component: CategoryAdvantageComponent;
  let fixture: ComponentFixture<CategoryAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAdvantageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
