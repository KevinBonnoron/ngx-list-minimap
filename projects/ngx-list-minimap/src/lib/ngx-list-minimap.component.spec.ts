import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxListMinimapComponent } from './ngx-list-minimap.component';

describe('NgxListMinimapComponent', () => {
  let component: NgxListMinimapComponent<unknown>;
  let fixture: ComponentFixture<NgxListMinimapComponent<unknown>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxListMinimapComponent]
    });
    fixture = TestBed.createComponent(NgxListMinimapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
