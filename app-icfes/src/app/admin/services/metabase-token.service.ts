import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetabaseTokenService {

  private apiUrl = 'http://localhost:3300/metabase-token';

  constructor(private http: HttpClient) {}

  getMetabaseUrl(dashboardId: number, params: object = {}): Observable<{ iframeUrl: string }> {
    const payload = {
      resource: { dashboard: dashboardId },
      params
    };

    return this.http.post<{ iframeUrl: string }>(this.apiUrl, payload);
  }
}
