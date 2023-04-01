import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeCardComponent } from './je-card.component';

describe('JeCardComponent', () => {
  let component: JeCardComponent;
  let fixture: ComponentFixture<JeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
