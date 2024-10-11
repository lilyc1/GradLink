import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grad2025Component } from './grad2025.component';

describe('Grad2025Component', () => {
  let component: Grad2025Component;
  let fixture: ComponentFixture<Grad2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grad2025Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grad2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
