import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelComponent } from './createl.component';

describe('CreatelComponent', () => {
  let component: CreatelComponent;
  let fixture: ComponentFixture<CreatelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
