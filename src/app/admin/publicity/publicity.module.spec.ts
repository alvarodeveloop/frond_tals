import { PublicityModule } from './publicity.module';

describe('PublicityModule', () => {
  let publicityModule: PublicityModule;

  beforeEach(() => {
    publicityModule = new PublicityModule();
  });

  it('should create an instance', () => {
    expect(publicityModule).toBeTruthy();
  });
});
