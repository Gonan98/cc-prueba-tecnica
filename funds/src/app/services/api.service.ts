import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealAsset, RealAssetDay } from '../models/api.model';

export interface MonthlyVariation {
  month: string;
  variation: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://fintual.cl/api/real_assets';

  private http = inject(HttpClient);

  constructor() {}

  getRealAsset(realAssetId: string): Observable<{ data: RealAsset }> {
    return this.http.get<{ data: RealAsset }>(`${this.apiUrl}/${realAssetId}`);
  }

  getRealAssetDays(realAssetId: string): Observable<{ data: RealAssetDay[] }> {
    return this.http.get<{ data: RealAssetDay[] }>(`${this.apiUrl}/${realAssetId}/days`, {
      params: {
        from_date: '2019-01-01',
        to_date: '2025-12-31',
      },
    });
  }
}
