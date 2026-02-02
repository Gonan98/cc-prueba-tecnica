import { Injectable } from '@angular/core';
import { Price, Variation } from '../models/chart.model';

@Injectable({
  providedIn: 'root',
})
export class VariationService {
  constructor() {}

  calculateMonthlyVariations(prices: Price[]) {
    const variations: Variation[] = [];
    const grouped = this.groupByMonth(prices);
    const months = this.generateMonths(
      +prices[0].date.slice(0, 4), // year
      +prices[prices.length - 1].date.slice(0, 4), //year
    );
    const normalized = this.normalize(grouped, months);

    months.forEach((month, index) => {
      variations.push({
        month,
        value: normalized[index],
      });
    });

    return variations;
  }

  private groupByMonth(prices: Price[]): Record<string, Price[]> {
    return prices.reduce(
      (acc, price) => {
        const month = price.date.slice(0, 7); // yyyy-mm

        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(price);
        return acc;
      },
      {} as Record<string, Price[]>,
    );
  }

  private generateMonths(startYear: number, endYear: number): string[] {
    const months: string[] = [];
    let currentDate = new Date(startYear, 0, 1);
    const endDate = new Date(endYear, 11, 31);

    while (currentDate <= endDate) {
      const y = currentDate.getFullYear();
      const m = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const month = `${y}-${m}`;
      months.push(month);
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return months;
  }

  private normalize(grouped: Record<string, Price[]>, months: string[]): number[] {
    return months.map((month) => {
      const prices = grouped[month];
      if (prices && prices.length > 0) {
        const first = prices[0];
        const last = prices[prices.length - 1];
        return ((last.value - first.value) / first.value) * 100;
      } else {
        return 0;
      }
    });
  }
}
