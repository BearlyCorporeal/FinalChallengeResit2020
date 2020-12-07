import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastfixtureListComponent } from './pastfixture-list.component';

describe('PastfixtureListComponent', () => {
  let component: PastfixtureListComponent;
  let fixture: ComponentFixture<PastfixtureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastfixtureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastfixtureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
