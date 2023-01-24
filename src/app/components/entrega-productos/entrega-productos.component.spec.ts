import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaProductosComponent } from './entrega-productos.component';

describe('EntregaProductosComponent', () => {
  let component: EntregaProductosComponent;
  let fixture: ComponentFixture<EntregaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
