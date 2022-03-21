import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CyberService {

  url="https://api.weatherapi.com/v1/current.json?key=b75cb33f5ae24f89925133554222901&q=London&aqi=no";
  constructor(private http:HttpClient) { }

   getData()
   {
    return this.http.get(this.url);
   }
}
