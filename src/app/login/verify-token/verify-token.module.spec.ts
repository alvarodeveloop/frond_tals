import { VerifyTokenModule } from './verify-token.module';

describe('VerifyTokenModule', () => {
  let verifyTokenModule: VerifyTokenModule;

  beforeEach(() => {
    verifyTokenModule = new VerifyTokenModule();
  });

  it('should create an instance', () => {
    expect(verifyTokenModule).toBeTruthy();
  });
});
