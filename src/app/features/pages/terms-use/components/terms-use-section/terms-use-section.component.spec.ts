import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsUseSectionComponent } from './terms-use-section.component';

describe('TermsUseSectionComponent', () => {
  let component: TermsUseSectionComponent;
  let fixture: ComponentFixture<TermsUseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsUseSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsUseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
