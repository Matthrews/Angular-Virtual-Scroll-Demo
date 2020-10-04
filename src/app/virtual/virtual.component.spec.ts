import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualComponent } from './virtual.component';

describe('VirtualComponent', () => {
  let component: VirtualComponent;
  let fixture: ComponentFixture<VirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
