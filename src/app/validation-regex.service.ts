import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationRegexService {
  constructor() {}

  /**
   * Valida se a sequência de dígitos está em ordem ascendente ou descendente.
   * @param value - A sequência de dígitos a ser validada.
   * @returns true se a sequência estiver em ordem ascendente ou descendente, false caso contrário.
   */
  validateAscendingDescendingNumber(value: string): boolean {
    // Expressão regular para verificar ordem ascendente
    const regexAscending = /^0*1*2*3*4*5*6*7*8*9*$/;

    // Expressão regular para verificar ordem descendente
    const regexDescending = /^9*8*7*6*5*4*3*2*1*0*$/;

    return regexAscending.test(value) || regexDescending.test(value);
  }

  /**
   * Valida se a sequência contém dígitos repetidos.
   * @param value - A sequência de dígitos a ser validada.
   * @returns true se a sequência contiver dígitos repetidos, false caso contrário.
   */
  validateRepeatedNumber(value: string): boolean {
    // Expressão regular para verificar dígitos repetidos
    const regex = /^(\d+)\1+$/;
    return regex.test(value);
  }

  /**
   * Valida uma senha com base em critérios específicos.
   * @param value - A sequência de dígitos a ser validada como senha.
   * @returns Um objeto com as seguintes propriedades:
   *   - `errorSequence`: true se a sequência estiver em ordem ascendente ou descendente, false caso contrário.
   *   - `errorRepeate`: true se a sequência contiver dígitos repetidos, false caso contrário.
   */
  validatePassword(value: string): any {
    let ValidateStatus = {
      errorSequence: this.validateAscendingDescendingNumber(value),
      errorRepeate: this.validateRepeatedNumber(value),
    };

    return ValidateStatus;
  }
}
