import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeButtonComponent } from './je-button.component';

describe('JeButtonComponent', () => {
  let component: JeButtonComponent;
  let fixture: ComponentFixture<JeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
