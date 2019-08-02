import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {ApiConfigService} from './api-config.service';

describe('ApiConfigService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ApiConfigService = TestBed.get(ApiConfigService);
    expect(service).toBeTruthy();
  });

});
