import { UserService } from './user.service';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ApiService } from './api.service';

describe('User service tests', () => {
  let service: UserService; 

  beforeEach(() => {
    service = new UserService(new ApiService
                              (new Http(new MockBackend(), new BaseRequestOptions()))); 
  });

  it('should compute the mode correctly', () => {
    expect(service.mode(["act", "act", "act", "bat"])).toBe("act");
    expect(service.mode(["act", "bat", "bat", "cat"])).toBe("bat");
    expect(service.mode(["cat"])).toBe("cat");
  });

});
