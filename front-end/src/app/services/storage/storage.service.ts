import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public saveData(objects: any, key: string): void {
    const data: any[] = objects;
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData(key: string): any | null {
    const data = localStorage.getItem(key);
    if (data) {
      const dataObject: any = JSON.parse(data);
      console.log('Dados carregados:', dataObject);
      return dataObject;
    } else {
      console.log('Nenhum dado encontrado no localStorage. ', key);
    }
    return null;
  }

  public clearData(key : string) : void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erro ao remover do Local Storage', error);
    }
  }
}

