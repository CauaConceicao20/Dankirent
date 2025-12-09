import { Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public loggedSignal = signal<boolean>(false);

  constructor(private storageService: StorageService, private userService : UserService) {
    const user = this.storageService.getData("loginUser");
    this.loggedSignal.set(!!user);
  }
  public login(email: string, password: string): Boolean {
    const users: User[] = this.userService.getAll();

    if (users && email && password) {
      if (email === "admin@hotmail.com" && password === "123456") {
        const user: any = {
          id: 0,
          name: "admin",
          email: email,
        }
        this.storageService.saveData(user, "loginUser");
        this.loggedSignal.set(true);
        return true;
      }
      for (let user of users) {
        console.log("criando loginUser");
        if (user.email === email && user.password === password) {
          console.log("criando loginUser");
          this.storageService.saveData(user, "loginUser");
          console.log("loginUser criado");
          this.loggedSignal.set(true);
          return true;
        }
      }
    }
    return false
  }

  public logout(): void {
    this.storageService.clearData("loginUser");
    this.loggedSignal.set(false);
  }

  public getUserLogged(): User {
    return this.storageService.getData("loginUser");
  }

  public isLogged(): boolean {
    return this.loggedSignal();
  }
}
