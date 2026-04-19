import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPrivacySectionComponent } from './terms-privacy-section.component';

describe('TermsPrivacySectionComponent', () => {
  let component: TermsPrivacySectionComponent;
  let fixture: ComponentFixture<TermsPrivacySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsPrivacySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsPrivacySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
