import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../environments/environments';
import { User } from '../../../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = environments.apiUrl;
  public constructor(private storageService: StorageService, private http: HttpClient) { }

  public createUser(userDataObject: any): User {
    const date = new Date();
    const formatDate = new Intl.DateTimeFormat('pt-BR').format(date);

    const user: User = {
      id: userDataObject.id, photoName: userDataObject.photoName, name: userDataObject.name, lastName: userDataObject.lastName, password: userDataObject.password, email: userDataObject.email,
      phone: userDataObject.phone, birthday: userDataObject.birthday, cpf: userDataObject.cpf, registerMoment: formatDate
    };

    const users = this.getAll();
    users.push(user);

    this.storageService.saveData(users, "registerUser");

    return user;
  }

  public getAll(): User[] {
    const users = this.storageService.getData("registerUser");
    return Array.isArray(users) ? users as User[] : [];
  }

  public getById(id: any): Observable<User> {
    return this.http.get<User>(`${this.api}/api/user/v1/getById/${id}`);
  }

  public updateUser(user: User): User {
    const users = this.getAll();
    const userIndex = users.findIndex(u => u.id === user.id);

    if (userIndex !== -1) {
      users[userIndex].name = user.name;
      users[userIndex].lastName = user.lastName;
      users[userIndex].phone = user.phone;
      users[userIndex].photoName = user.photoName;

      this.storageService.saveData(users, "registerUser");
      this.storageService.saveData(users, "loginUser");
      return users[userIndex];
    }

    throw new Error('Usuário não encontrado');
  }
}
