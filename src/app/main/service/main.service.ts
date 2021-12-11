import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainInterface } from '../interface/main';


@Injectable({
  providedIn: 'root'
})

export class MainService {

constructor(
  private http: HttpClient,
  private router: Router,
) { }


getData(status: string, email: string): Observable<any> {
  this.router.navigate([''], {
    queryParams: { status: status , email: email },
  })
  const params = new HttpParams()
   .set('status', status)
   .set('email', email);
  const url = 'https://gorest.co.in/public/v1/users';
  return this.http.get<any>(url, {params})
  };
}