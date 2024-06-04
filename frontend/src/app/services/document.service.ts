import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = `${environment.apiUrl}/documents/`;

  constructor(private http: HttpClient) { }

  getDocuments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getDocument(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  createDocument(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  updateDocument(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}/`, formData);
  }

  deleteDocument(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}