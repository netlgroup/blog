import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});