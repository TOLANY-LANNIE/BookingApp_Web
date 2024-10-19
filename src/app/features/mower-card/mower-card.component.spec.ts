import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MowerCardComponent } from './mower-card.component';

describe('MowerCardComponent', () => {
  let component: MowerCardComponent;
  let fixture: ComponentFixture<MowerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MowerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MowerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
