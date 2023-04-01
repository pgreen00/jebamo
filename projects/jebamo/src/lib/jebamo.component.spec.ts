import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JebamoComponent } from './jebamo.component';

describe('JebamoComponent', () => {
  let component: JebamoComponent;
  let fixture: ComponentFixture<JebamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JebamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JebamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
