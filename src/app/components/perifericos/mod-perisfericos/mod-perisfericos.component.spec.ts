import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPerisfericosComponent } from './mod-perisfericos.component';

describe('ModPerisfericosComponent', () => {
  let component: ModPerisfericosComponent;
  let fixture: ComponentFixture<ModPerisfericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPerisfericosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModPerisfericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
