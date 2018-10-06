import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFreeComponent } from './enterprise-free.component';

describe('EnterpriseFreeComponent', () => {
  let component: EnterpriseFreeComponent;
  let fixture: ComponentFixture<EnterpriseFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
