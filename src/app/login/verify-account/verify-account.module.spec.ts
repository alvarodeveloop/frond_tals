import { VerifyAccountModule } from './verify-account.module';

describe('VerifyAccountModule', () => {
  let verifyAccountModule: VerifyAccountModule;

  beforeEach(() => {
    verifyAccountModule = new VerifyAccountModule();
  });

  it('should create an instance', () => {
    expect(verifyAccountModule).toBeTruthy();
  });
});
