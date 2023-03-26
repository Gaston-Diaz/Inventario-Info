import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEProdComponent } from './mod-eprod.component';

describe('ModEProdComponent', () => {
  let component: ModEProdComponent;
  let fixture: ComponentFixture<ModEProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModEProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModEProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
