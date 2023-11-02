import { Component } from '@angular/core';
import { ApiBackService, Todo } from './api-back.service';
import { ValidationRegexService } from './validation-regex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-box';

  constructor(
    private apiService: ApiBackService,
    private regexService: ValidationRegexService
  ) {}

  ngOnInit(): void {
    console.log('=========================================');
    console.log('validateAscendingDescendingNumber: ');

    console.log(
      '0123456 ',
      this.regexService.validateAscendingDescendingNumber('0123456')
    );
    console.log(
      '234567 ',
      this.regexService.validateAscendingDescendingNumber('234567')
    );
    console.log(
      '456710 ',
      this.regexService.validateAscendingDescendingNumber('456710')
    );
    console.log(
      '987654 ',
      this.regexService.validateAscendingDescendingNumber('987654')
    );
    console.log(
      '111 ',
      this.regexService.validateAscendingDescendingNumber('111')
    );
    console.log(
      '4444 ',
      this.regexService.validateAscendingDescendingNumber('4444')
    );
    console.log(
      '888888 ',
      this.regexService.validateAscendingDescendingNumber('888888')
    );
    console.log(
      '111034 ',
      this.regexService.validateAscendingDescendingNumber('111034')
    );

    console.log(
      '101010 ',
      this.regexService.validateAscendingDescendingNumber('101010')
    );

    console.log('=========================================');
    console.log('validateRepeatedNumber: ');

    console.log('111 ', this.regexService.validateRepeatedNumber('111'));

    console.log('232323 ', this.regexService.validateRepeatedNumber('232323'));

    console.log('1010 ', this.regexService.validateRepeatedNumber('1010'));

    console.log('=========================================');
    console.log('validatePassword: ');

    console.log('111 ', this.regexService.validatePassword('111'));

    console.log('232323 ', this.regexService.validatePassword('232323'));

    console.log('1010 ', this.regexService.validatePassword('1010'));
  }

  getData(): void {
    this.apiService.getData().subscribe((data) => {
      console.log(data);
    });
  }

  postData(): void {
    const data: Todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    };
    this.apiService.postData(data).subscribe((response) => {
      console.log(response);
    });
  }

  deleteData(): void {
    const id = 1;
    this.apiService.deleteData(id).subscribe((response) => {
      console.log(response);
    });
  }

  updateData(): void {
    const id = 1;
    const data: Todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: true,
    };
    this.apiService.updateData(id, data).subscribe((response) => {
      console.log(response);
    });
  }
}
