import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }
  
  getProjects(){
    return this.http.get('/api/project/GetProjects');
  }
  getApartments(){
    return this.http.get('/api/apartment/GetApartments');
  }
}