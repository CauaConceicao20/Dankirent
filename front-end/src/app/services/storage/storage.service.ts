import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public saveData(object : any, nameSpace : string): void {
    const data: any = object;
    localStorage.setItem(nameSpace , JSON.stringify(data));
    console.log('Dados salvos no localStorage', data.nome);
  }

  public getData(nameSpace : string): any | null {
    const data = localStorage.getItem(nameSpace);
    if (data) {
      const dataObject: any = JSON.parse(data);
      console.log('Dados carregados:', dataObject);
      return dataObject;
    } else {
      console.log('Nenhum dado encontrado no localStorage. ', nameSpace);
    }
    return null;
  }

  public clearUserData() {
    try {
      localStorage.removeItem('usuario');
    } catch (error) {
      console.error('Erro ao remover do Local Storage', error);
    }
  }
}  

