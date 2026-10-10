import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MainService } from '../../services/main.service';

export interface PersonData {
  firstName: string;
  lastName: string;
}

export interface DocumentValidator {
  supports(documentType: string): boolean;
  validate(documentNumber: string): Promise<PersonData>;
}

// --- Adaptadores concretos ---
class DniValidatorAdapter implements DocumentValidator {
  constructor(private main: MainService) {}
  supports(t: string) { return t === 'DNI'; }
  async validate(num: string): Promise<PersonData> {
    const r: any = await firstValueFrom(this.main.findDNI(num));
    if (!r.success) throw new Error(r.message);
    return {
      firstName: r.nombres,
      lastName: `${r.apellidoPaterno} ${r.apellidoMaterno}`.trim()
    };
  }
}

class RucValidatorAdapter implements DocumentValidator {
  constructor(private main: MainService) {}
  supports(t: string) { return t === 'RUC'; }
  async validate(num: string): Promise<PersonData> {
    const r: any = await firstValueFrom(this.main.findRUC(num));
    if (!r.success) throw new Error(r.message);
    return {
      firstName: r.nombres,
      lastName: `${r.apellidoPaterno} ${r.apellidoMaterno}`.trim()
    };
  }
}

// --- Factory de validadores ---
@Injectable({ providedIn: 'root' })
export class DocumentValidatorFactory {
  private adapters: DocumentValidator[];
  constructor(main: MainService) {
    this.adapters = [
      new DniValidatorAdapter(main),
      new RucValidatorAdapter(main),
    ];
  }
  get(documentType: string): DocumentValidator | null {
    return this.adapters.find(a => a.supports(documentType)) ?? null;
  }
}