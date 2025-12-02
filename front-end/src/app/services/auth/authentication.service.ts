import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private storageService: StorageService, private userService: UserService) { }

  public login(email: string, password: string): Boolean {
    const users: User[] = this.userService.getAll();

    if (users && email && password) {
      for (let user of users) {
        console.log("criando loginUser");
        if (user.email === email && user.password === password) {
          console.log("criando loginUser");
          this.storageService.saveData(user, "loginUser");
          console.log("loginUser criado");
          return true;
        }
      }
    }
    return false
  }

  public isUserLoggedIn(): boolean {
    const user = this.storageService.getData("loginUser");
    return !!user; 
  }

   public logout(): void {
    this.storageService.clearData("loginUser");
  }
}
