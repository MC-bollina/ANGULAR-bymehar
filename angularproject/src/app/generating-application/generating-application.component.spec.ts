import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingApplicationComponent } from './generating-application.component';

describe('GeneratingApplicationComponent', () => {
  let component: GeneratingApplicationComponent;
  let fixture: ComponentFixture<GeneratingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratingApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
