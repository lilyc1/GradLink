import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grad2026Component } from './grad2026.component';

describe('Grad2026Component', () => {
  let component: Grad2026Component;
  let fixture: ComponentFixture<Grad2026Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grad2026Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grad2026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
