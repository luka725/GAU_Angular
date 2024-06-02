import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleroomComponent } from './singleroom.component';

describe('SingleroomComponent', () => {
  let component: SingleroomComponent;
  let fixture: ComponentFixture<SingleroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
