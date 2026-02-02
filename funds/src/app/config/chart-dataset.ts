import { ChartConfiguration } from 'chart.js';
import { AssetVariation } from '../models/chart.model';
import { ASSETS } from '../app.constants';

export function lineChartDataset(data: AssetVariation[]): ChartConfiguration<'line'>['data'] {
  return {
    // labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    labels: data[0]?.variations.map((variation) => variation.month) || [],
    datasets: data.map((asset) => ({
      data: asset.variations.map((variation) => variation.value),
      label: `${ASSETS.find((a) => a.id === asset.assetId)?.name || asset.assetId}`,
      fill: false,
      tension: 0,
      borderWidth: 2,
    })),
  };
}
