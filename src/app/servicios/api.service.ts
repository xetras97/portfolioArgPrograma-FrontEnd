import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/ver/";

  constructor(private http:HttpClient) { }

  obtenerDatosPersonales(componente:string):Observable<any>
  {
    return this.http.get<any>(this.url+componente)
  }
}