import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private storageService: StorageService, private userService: UserService) { }

  public login(email: String, password: String): Boolean {
    const users: User[] = this.userService.getAll();

    if ((users != null && users != undefined) &&
      (email === undefined || password === undefined)) {
      for (let user of users) {
        if (user.email === email && user.password === password) {
          this.storageService.saveData(user, "loginUser");
          return true;
        }
      }
    }

    return false
  }
}
