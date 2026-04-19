import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyObjectsComponent } from './my-objects.component';

describe('MyObjectsComponent', () => {
  let component: MyObjectsComponent;
  let fixture: ComponentFixture<MyObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
