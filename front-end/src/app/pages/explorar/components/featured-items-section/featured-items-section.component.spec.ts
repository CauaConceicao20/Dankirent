import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedItemsSectionComponent } from './featured-items-section.component';

describe('FeaturedItemsSectionComponent', () => {
  let component: FeaturedItemsSectionComponent;
  let fixture: ComponentFixture<FeaturedItemsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedItemsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedItemsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
