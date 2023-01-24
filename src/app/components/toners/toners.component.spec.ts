import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonersComponent } from './toners.component';

describe('TonersComponent', () => {
  let component: TonersComponent;
  let fixture: ComponentFixture<TonersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
