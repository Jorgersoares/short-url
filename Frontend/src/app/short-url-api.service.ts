import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlApiService {
  API_ENDPOINT = 'https://shorturl--api.herokuapp.com/';
  
  constructor(private http : HttpClient) { }

  public postURL(object){
    return this.http.post(this.API_ENDPOINT,object)
  }

}
