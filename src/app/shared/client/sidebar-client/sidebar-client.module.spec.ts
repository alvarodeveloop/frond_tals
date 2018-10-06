import { SidebarClientModule } from './sidebar-client.module';

describe('SidebarClientModule', () => {
  let sidebarClientModule: SidebarClientModule;

  beforeEach(() => {
    sidebarClientModule = new SidebarClientModule();
  });

  it('should create an instance', () => {
    expect(sidebarClientModule).toBeTruthy();
  });
});
