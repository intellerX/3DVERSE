import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  get(cc) {
    return this.http.get(environment.backendUrl + "formacion/?cc=" + cc);
  }

  get_all() {
    return this.http.get(environment.backendUrl + "formacion");
  }

  subscribe(id_formacion) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token_buy69')
    });
    return this.http.post(environment.backendUrl + "formacion/?id_formacion=" + id_formacion, null, { headers: reqHeader })
  }


}
