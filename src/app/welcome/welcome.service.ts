import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  private welcomeUrl = '/welcome';

  constructor(private http: HttpClient) {}

  getWelcome(): Observable<string> {
    return this.http.get(this.welcomeUrl, { responseType: 'text' });
  }

}
