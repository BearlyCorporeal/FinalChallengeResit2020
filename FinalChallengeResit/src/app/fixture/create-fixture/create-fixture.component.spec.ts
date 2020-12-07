import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFixtureComponent } from './create-fixture.component';

describe('CreateFixtureComponent', () => {
  let component: CreateFixtureComponent;
  let fixture: ComponentFixture<CreateFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
