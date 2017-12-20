import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBatchComponent } from './current-batch.component';

describe('CurrentBatchComponent', () => {
  let component: CurrentBatchComponent;
  let fixture: ComponentFixture<CurrentBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
