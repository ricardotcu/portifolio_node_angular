import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriasComponent } from './catagorias.component';

describe('CatagoriasComponent', () => {
  let component: CatagoriasComponent;
  let fixture: ComponentFixture<CatagoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
