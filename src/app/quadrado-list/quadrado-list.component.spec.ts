import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadradoListComponent } from './quadrado-list.component';

describe('QuadradoListComponent', () => {
  let component: QuadradoListComponent;
  let fixture: ComponentFixture<QuadradoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadradoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadradoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
