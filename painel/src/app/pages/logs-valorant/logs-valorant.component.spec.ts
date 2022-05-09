import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsValorantComponent } from './logs-valorant.component';

describe('LogsValorantComponent', () => {
  let component: LogsValorantComponent;
  let fixture: ComponentFixture<LogsValorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsValorantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsValorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
