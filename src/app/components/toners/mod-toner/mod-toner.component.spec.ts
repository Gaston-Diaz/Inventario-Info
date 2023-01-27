import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTonerComponent } from './mod-toner.component';

describe('ModTonerComponent', () => {
  let component: ModTonerComponent;
  let fixture: ComponentFixture<ModTonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModTonerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModTonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
