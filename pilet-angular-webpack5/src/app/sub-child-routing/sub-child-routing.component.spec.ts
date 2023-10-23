import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChildRoutingComponent } from './sub-child-routing.component';

describe('SubChildRoutingComponent', () => {
  let component: SubChildRoutingComponent;
  let fixture: ComponentFixture<SubChildRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubChildRoutingComponent]
    });
    fixture = TestBed.createComponent(SubChildRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
