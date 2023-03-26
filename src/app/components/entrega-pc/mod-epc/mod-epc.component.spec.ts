import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEpcComponent } from './mod-epc.component';

describe('ModEpcComponent', () => {
  let component: ModEpcComponent;
  let fixture: ComponentFixture<ModEpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModEpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModEpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
