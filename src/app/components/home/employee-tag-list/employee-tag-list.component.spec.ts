import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTagListComponent } from './employee-tag-list.component';

describe('EmployeeTagListComponent', () => {
  let component: EmployeeTagListComponent;
  let fixture: ComponentFixture<EmployeeTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
