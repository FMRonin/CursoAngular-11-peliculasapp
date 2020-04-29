import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaCartComponent } from './pelicula-cart.component';

describe('PeliculaCartComponent', () => {
  let component: PeliculaCartComponent;
  let fixture: ComponentFixture<PeliculaCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
