import { TestBed } from '@angular/core/testing';

import { SaveUserService } from './save-user.service';

describe('SaveUserService', () => {
  let service: SaveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
