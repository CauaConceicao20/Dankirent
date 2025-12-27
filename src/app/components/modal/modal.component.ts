import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalData } from '../../models/modal.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  private static modalState = new BehaviorSubject<ModalData | null>(null);

  constructor() { }

  public static open(data: ModalData) : void {
    ModalComponent.modalState.next(data);
  }

  public static close() : void {
    ModalComponent.modalState.next(null);
  }

  public get state$() : Observable<ModalData | null>{
    return ModalComponent.modalState.asObservable();
  }

  public confirm() {
    const data = ModalComponent.modalState.getValue();
    data?.action?.();
    ModalComponent.close();
  }

  public cancel() {
    ModalComponent.close();
  }
}