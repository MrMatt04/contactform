import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatenComponent } from './resultaten.component';

describe('ResultatenComponent', () => {
  let component: ResultatenComponent;
  let fixture: ComponentFixture<ResultatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
