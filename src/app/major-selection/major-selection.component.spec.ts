import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorSelectionComponent } from './major-selection.component';

describe('MajorSelectionComponent', () => {
  let component: MajorSelectionComponent;
  let fixture: ComponentFixture<MajorSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
