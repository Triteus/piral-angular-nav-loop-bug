import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRoutingComponent } from './base-routing.component';

describe('BaseRoutingComponent', () => {
  let component: BaseRoutingComponent;
  let fixture: ComponentFixture<BaseRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseRoutingComponent]
    });
    fixture = TestBed.createComponent(BaseRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
