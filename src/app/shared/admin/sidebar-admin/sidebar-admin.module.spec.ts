import { SidebarAdminModule } from './sidebar-admin.module';

describe('SidebarAdminModule', () => {
  let sidebarAdminModule: SidebarAdminModule;

  beforeEach(() => {
    sidebarAdminModule = new SidebarAdminModule();
  });

  it('should create an instance', () => {
    expect(sidebarAdminModule).toBeTruthy();
  });
});
