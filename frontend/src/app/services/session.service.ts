import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Session {
  token?: string;
  currentProfile?: any;
  currentHealthEstablishment?: any;
  profiles?: any[];
  healthEstablisments?: any[];
  [key: string]: any;
}

@Injectable({ providedIn: 'root' }) // Angular garantiza instancia única
export class SessionService {
  private static instance: SessionService | null = null;
  private session$ = new BehaviorSubject<Session | null>(null);

  constructor() {
    if (SessionService.instance) return SessionService.instance;
    SessionService.instance = this;
  }

  set(session: Session) { this.session$.next(session); }
  get(): Session | null { return this.session$; }
  patch(partial: Partial<Session>) {
    this.session$.next({ ...this.session$.value, ...partial });
  }
  clear() { this.session$.next(null); }
}