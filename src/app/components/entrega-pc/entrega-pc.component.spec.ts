import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaPcComponent } from './entrega-pc.component';

describe('EntregaPcComponent', () => {
  let component: EntregaPcComponent;
  let fixture: ComponentFixture<EntregaPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
