import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { User } from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor(private storageService: StorageService) { }

  public createUser(userDataObject: any): User {
    const id: number = Math.floor(Math.random() * 100);
    const user: User = {
      id: id, name: userDataObject.name, password: userDataObject.password, email: userDataObject.email,
      phone: userDataObject.phone, cfp: userDataObject.cpf
    };
    this.storageService.saveData(user, "registerUser");

    return user;
  }

  public getAll(): User[] {
    return this.storageService.getData("registerUser") as User[];
  }
}
