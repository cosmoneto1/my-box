import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationRegexService {
  constructor() {}

  validateAscendingDescendingNumber(value: string): boolean {
    const regexAscending = /^0*1*2*3*4*5*6*7*8*9*$/;
    const regexDescending = /^9*8*7*6*5*4*3*2*1*0*$/;
    return regexAscending.test(value) || regexDescending.test(value);
  }

  validateRepeatedNumber(value: string): boolean {
    const regex = /^(\d+)\1+$/;
    return regex.test(value);
  }

  validatePassword(value: string): any {
    let ValidateSatus = {
      errorSequence: this.validateAscendingDescendingNumber(value),
      errorRepeate: this.validateRepeatedNumber(value),
    };

    return ValidateSatus;
  }
}
