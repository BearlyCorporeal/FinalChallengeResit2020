import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorisedusersComponent } from './unauthorisedusers.component';

describe('UnauthorisedusersComponent', () => {
  let component: UnauthorisedusersComponent;
  let fixture: ComponentFixture<UnauthorisedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorisedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorisedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
