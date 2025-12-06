import { Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLogged = signal<boolean>(false);

  constructor(private storageService: StorageService, private userService: UserService) { }

  public login(email: string, password: string): Boolean {
    const users: User[] = this.userService.getAll();

    if (users && email && password) {
      if (email === "admin@hotmail.com" && password === "123456") {
        this.isLogged.set(true);
        return true;
      }
      for (let user of users) {
        console.log("criando loginUser");
        if (user.email === email && user.password === password) {
          console.log("criando loginUser");
          this.storageService.saveData(user, "loginUser");
          console.log("loginUser criado");
          this.isLogged.set(true);
          return true;
        }
      }
    }
    return false
  }

  public logout(): void {
    this.storageService.clearData("loginUser");
    this.isLogged.set(false);
  }
}
