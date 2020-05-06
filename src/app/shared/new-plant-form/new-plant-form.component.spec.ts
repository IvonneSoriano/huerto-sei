import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlantFormComponent } from './new-plant-form.component';

describe('NewPlantFormComponent', () => {
  let component: NewPlantFormComponent;
  let fixture: ComponentFixture<NewPlantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
