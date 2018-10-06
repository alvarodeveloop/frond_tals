import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEnterpriseComponent } from './sidebar-enterprise.component';

describe('SidebarEnterpriseComponent', () => {
  let component: SidebarEnterpriseComponent;
  let fixture: ComponentFixture<SidebarEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
