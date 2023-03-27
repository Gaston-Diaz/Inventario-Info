import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEtonerComponent } from './mod-etoner.component';

describe('ModEtonerComponent', () => {
  let component: ModEtonerComponent;
  let fixture: ComponentFixture<ModEtonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModEtonerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModEtonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
