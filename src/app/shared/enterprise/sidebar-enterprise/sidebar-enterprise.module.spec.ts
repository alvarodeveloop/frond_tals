import { SidebarEnterpriseModule } from './sidebar-enterprise.module';

describe('SidebarEnterpriseModule', () => {
  let sidebarEnterpriseModule: SidebarEnterpriseModule;

  beforeEach(() => {
    sidebarEnterpriseModule = new SidebarEnterpriseModule();
  });

  it('should create an instance', () => {
    expect(sidebarEnterpriseModule).toBeTruthy();
  });
});
