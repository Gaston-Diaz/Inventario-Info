import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaTonersComponent } from './entrega-toners.component';

describe('EntregaTonersComponent', () => {
  let component: EntregaTonersComponent;
  let fixture: ComponentFixture<EntregaTonersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaTonersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaTonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
