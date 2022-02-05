import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmtTwoComponent } from './asmt-two.component';

describe('AsmtTwoComponent', () => {
  let component: AsmtTwoComponent;
  let fixture: ComponentFixture<AsmtTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsmtTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmtTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
