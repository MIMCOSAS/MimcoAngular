import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimcoserviciosComponent } from './mimcoservicios.component';

describe('MimcoserviciosComponent', () => {
  let component: MimcoserviciosComponent;
  let fixture: ComponentFixture<MimcoserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimcoserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimcoserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
