import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiBackService, Todo } from './api-back.service';

describe('ApiBackService', () => {
  let service: ApiBackService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiBackService],
    });
    service = TestBed.inject(ApiBackService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve data from the API', () => {
    const mockData: Todo[] = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
    ];

    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/todos'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should post data to the API', () => {
    const mockData: Todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    };

    service.postData(mockData).subscribe((response) => {
      expect(response).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/todos'
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockData);
    req.flush(mockData);
  });

  it('should delete data from the API', () => {
    const id = 1;

    service.deleteData(id).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should update data in the API', () => {
    const id = 1;
    const mockData: Todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: true,
    };

    service.updateData(id, mockData).subscribe((response) => {
      expect(response).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockData);
    req.flush(mockData);
  });
});
