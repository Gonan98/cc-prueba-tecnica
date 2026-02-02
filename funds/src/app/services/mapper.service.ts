import { Injectable } from '@angular/core';
import { RealAssetDay } from '../models/api.model';
import { Price } from '../models/chart.model';

@Injectable({
  providedIn: 'root',
})
export class MapperService {
  toPrice(realAssetDay: RealAssetDay): Price {
    return {
      date: realAssetDay.attributes.date,
      value: realAssetDay.attributes.price,
    };
  }

  toPrices(realAssetDays: RealAssetDay[]): Price[] {
    return realAssetDays.map((day) => this.toPrice(day));
  }
}
