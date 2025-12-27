import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncetComponent } from './announcet.component';

describe('AnnouncetComponent', () => {
  let component: AnnouncetComponent;
  let fixture: ComponentFixture<AnnouncetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
