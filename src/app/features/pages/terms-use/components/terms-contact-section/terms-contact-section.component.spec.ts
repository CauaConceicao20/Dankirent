import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsContactSectionComponent } from './terms-contact-section.component';

describe('TermsContactSectionComponent', () => {
  let component: TermsContactSectionComponent;
  let fixture: ComponentFixture<TermsContactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsContactSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
