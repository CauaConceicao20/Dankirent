import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public saveData(objects: any, nameSpace: string): void {
    const data: any[] = objects;
    localStorage.setItem(nameSpace, JSON.stringify(data));
  }

  public getData(nameSpace: string): any | null {
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

  public clearData(nameSpace : string) {
    try {
      localStorage.removeItem(nameSpace);
    } catch (error) {
      console.error('Erro ao remover do Local Storage', error);
    }
  }
}

