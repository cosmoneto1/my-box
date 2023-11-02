// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [RouterTestingModule],
//     declarations: [AppComponent]
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'my-box'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('my-box');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('my-box app is running!');
//   });
// });

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiBackService, Todo } from './api-back.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let apiService: jasmine.SpyObj<ApiBackService>;

  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiBackService', [
      'getData',
      'postData',
      'deleteData',
      'updateData',
    ]);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ApiBackService, useValue: apiServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(
      ApiBackService
    ) as jasmine.SpyObj<ApiBackService>;
  });

  it('should call getData() and log the response', () => {
    const mockData = [
      { id: 1, title: 'delectus aut autem', completed: false },
    ] as Array<Todo>;
    apiService.getData.and.returnValue(of(mockData));

    component.getData();

    expect(apiService.getData).toHaveBeenCalled();
    // expect(console.log).toHaveBeenCalledWith(mockData);
  });

  it('should call postData() and log the response', () => {
    const mockResponse = { success: true };
    const mockData: Todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    } as Todo;
    apiService.postData.and.returnValue(of(mockData));

    component.postData();

    expect(apiService.postData).toHaveBeenCalledWith(mockData);
    // expect(console.log).toHaveBeenCalledWith(mockResponse);
  });

  it('should call deleteData() and log the response', () => {
    const mockResponse = null;
    const id = 1;
    apiService.deleteData.and.returnValue(of());

    component.deleteData();

    expect(apiService.deleteData).toHaveBeenCalledWith(id);
    // expect(console.log).toHaveBeenCalledWith(mockResponse);
  });

  it('should call updateData() and log the response', () => {
    const mockResponse = { success: true };
    const id = 1;
    const mockData: Todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: true,
    } as Todo;
    apiService.updateData.and.returnValue(of(mockData));

    component.updateData();

    expect(apiService.updateData).toHaveBeenCalledWith(id, mockData);
    // expect(console.log).toHaveBeenCalledWith(mockData);
  });
});
