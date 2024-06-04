import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://localhost:8000/ws/somepath/');
  }

  public sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  public getMessages() {
    return this.socket$.asObservable();
  }
}