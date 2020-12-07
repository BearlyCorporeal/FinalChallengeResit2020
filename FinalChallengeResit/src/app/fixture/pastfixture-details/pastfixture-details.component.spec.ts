import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastfixtureDetailsComponent } from './pastfixture-details.component';

describe('PastfixtureDetailsComponent', () => {
  let component: PastfixtureDetailsComponent;
  let fixture: ComponentFixture<PastfixtureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastfixtureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastfixtureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
