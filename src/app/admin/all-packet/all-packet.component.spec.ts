import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPacketComponent } from './all-packet.component';

describe('AllPacketComponent', () => {
  let component: AllPacketComponent;
  let fixture: ComponentFixture<AllPacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
