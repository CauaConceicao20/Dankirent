import { Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../../models/user.model';
import { UserService } from '../user/user.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environments } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { UserLogged } from '../../../models/userLogged.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public loggedSignal = signal<boolean>(false);
  private api = environments.apiUrl;

  constructor(private storageService: StorageService, private userService: UserService,
    private http: HttpClient) {
    const user = this.storageService.getData("loginUser");
    this.loggedSignal.set(!!user);
  }

  public login(email: string, password: string): Observable<any> {
    this.loggedSignal.set(true);
    console.log("quando login feito:", this.loggedSignal());
    return this.http.post(`${this.api}/api/auth/v1/login`, { email, password });
  }

  getUserLogged(): Observable<UserLogged | null> {
    return this.http.get<UserLogged>(`${this.api}/api/auth/v1/me`).pipe(
      tap(() => {
        this.loggedSignal.set(true);
      }),
      catchError(err => {
        if (err.status === 401) {
          this.loggedSignal.set(false);
          return of(null);
        }
        throw err;
      })
    );
  }

  public logout(): Observable<any> {
    return this.http.post(`${this.api}/api/auth/v1/logout`, {});
  }
}
