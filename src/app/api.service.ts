import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  display() {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
  // display(){
  //  return this.http.get('http://localhost:2525/user');
  //   }
 getApi(c){
  return this.http.post('http://localhost:2525/user',c);
}






}
