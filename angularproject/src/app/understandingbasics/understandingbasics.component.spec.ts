import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingbasicsComponent } from './understandingbasics.component';

describe('UnderstandingbasicsComponent', () => {
  let component: UnderstandingbasicsComponent;
  let fixture: ComponentFixture<UnderstandingbasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingbasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
