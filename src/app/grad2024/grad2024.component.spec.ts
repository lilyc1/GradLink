import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grad2024Component } from './grad2024.component';

describe('Grad2024Component', () => {
  let component: Grad2024Component;
  let fixture: ComponentFixture<Grad2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grad2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grad2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
