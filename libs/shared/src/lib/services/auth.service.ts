import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Emits boolean, to set logggedIn state.
   */
  userloggedIn = new Subject<boolean>();

  /**
   * Observable can be subscribed to know the logggedIn state
   */
  userloggedIn$ = this.userloggedIn.asObservable();
}
