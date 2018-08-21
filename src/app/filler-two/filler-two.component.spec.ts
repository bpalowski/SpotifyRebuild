import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillerTwoComponent } from './filler-two.component';

describe('FillerTwoComponent', () => {
  let component: FillerTwoComponent;
  let fixture: ComponentFixture<FillerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
