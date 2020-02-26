import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentListsComponent } from './environment-list.component';

describe('EnvironmentListComponent', () => {
  let component: EnvironmentListsComponent;
  let fixture: ComponentFixture<EnvironmentListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
