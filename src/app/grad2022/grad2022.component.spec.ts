import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grad2022Component } from './grad2022.component';

describe('Grad2022Component', () => {
  let component: Grad2022Component;
  let fixture: ComponentFixture<Grad2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grad2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grad2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
