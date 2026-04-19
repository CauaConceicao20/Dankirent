import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsLgpdSectionComponent } from './terms-lgpd-section.component';

describe('TermsLgpdSectionComponent', () => {
  let component: TermsLgpdSectionComponent;
  let fixture: ComponentFixture<TermsLgpdSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsLgpdSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsLgpdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
