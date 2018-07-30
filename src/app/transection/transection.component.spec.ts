import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { transectionComponent } from './transection.component';

describe('BlockComponent', () => {
  let component: transectionComponent;
  let fixture: ComponentFixture<transectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ transectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(transectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
