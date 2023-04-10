import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageAndFooterComponent } from './advantage-and-footer.component';

describe('AdvantageAndFooterComponent', () => {
  let component: AdvantageAndFooterComponent;
  let fixture: ComponentFixture<AdvantageAndFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantageAndFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantageAndFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
