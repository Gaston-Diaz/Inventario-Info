import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPCComponent } from './mod-pc.component';

describe('ModPCComponent', () => {
  let component: ModPCComponent;
  let fixture: ComponentFixture<ModPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
