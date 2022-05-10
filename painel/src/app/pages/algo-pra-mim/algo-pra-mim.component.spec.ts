import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoPraMimComponent } from './algo-pra-mim.component';

describe('AlgoPraMimComponent', () => {
  let component: AlgoPraMimComponent;
  let fixture: ComponentFixture<AlgoPraMimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoPraMimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoPraMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
