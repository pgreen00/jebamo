import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeToolbarComponent } from './je-toolbar.component';

describe('JeToolbarComponent', () => {
  let component: JeToolbarComponent;
  let fixture: ComponentFixture<JeToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
