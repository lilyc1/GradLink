import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBasicComponent } from './sign-up-basic.component';

describe('SignUpBasicComponent', () => {
  let component: SignUpBasicComponent;
  let fixture: ComponentFixture<SignUpBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
