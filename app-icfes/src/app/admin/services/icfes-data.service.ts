import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IcfesDataService {

  private apiUrl = 'http://localhost:3000//api/v2/icfes/upload';

  constructor(private http: HttpClient) { }

  upIcfesData(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.http.post<any>(this.apiUrl, formData);
  }
}
