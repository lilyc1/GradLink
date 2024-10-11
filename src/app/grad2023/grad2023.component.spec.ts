import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grad2023Component } from './grad2023.component';

describe('Grad2023Component', () => {
  let component: Grad2023Component;
  let fixture: ComponentFixture<Grad2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grad2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grad2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
