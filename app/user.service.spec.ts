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
    let oneMode = ["act", "act", "act", "bat", "cat"];
    let tiedMode = ["act", "bat", "act", "bat", "cat"];
    let tiedMode3 = ["act", "bat", "act", "bat", "cat", "cat"];
    let emptyMode = [null, null];
    let result;

    // Single mode
    result = service.mode(oneMode);
    expect(result).toContain("act");
    expect(result).not.toContain("bat");
    expect(result).not.toContain("cat");

    // Tied mode
    result = service.mode(tiedMode);
    expect(result).toContain("act");
    expect(result).toContain("bat");
    expect(result).not.toContain("cat");

    result = service.mode(tiedMode3);
    expect(result).toContain("act");
    expect(result).toContain("bat");
    expect(result).toContain("cat");

    // Empty mode
    result = service.mode(emptyMode);
    expect(result.length).toBe(0);
  });

});
