import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { VariationService } from './variation.service';
import { forkJoin, map } from 'rxjs';
import { MapperService } from './mapper.service';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private apiService = inject(ApiService);
  private mapperService = inject(MapperService);
  private variationService = inject(VariationService);

  constructor() {}

  getVariations(assetIds: string[]) {
    return forkJoin(
      assetIds.map((assetId) =>
        this.apiService.getRealAssetDays(assetId).pipe(
          map(({ data }) => this.mapperService.toPrices(data)),
          map((prices) => ({
            assetId: assetId,
            variations: this.variationService.calculateMonthlyVariations(prices),
          })),
        ),
      ),
    );
  }
}
