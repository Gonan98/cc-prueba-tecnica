import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AssetService } from './services/asset.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { lineChartOptions } from './config/chart-options';
import { lineChartDataset } from './config/chart-dataset';
import { AssetVariation } from './models/chart.model';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, BaseChartDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];
  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  assetIds = ['15077', '188', '187', '186'];
  yearStartSelector = new FormControl(this.years[0]);
  monthStartSelector = new FormControl(1);
  yearEndSelector = new FormControl(this.years[this.years.length - 1]);
  monthEndSelector = new FormControl(12);

  chartData = signal<ChartConfiguration<'line'>['data']>({
    labels: [],
    datasets: [],
  });

  chartOptions = lineChartOptions;

  initialData: AssetVariation[] = [];

  private assetService = inject(AssetService);
  constructor() {}

  ngOnInit(): void {
    this.assetService.getVariations(this.assetIds).subscribe({
      next: (data) => {
        this.initialData = data;
        this.chartData.set(lineChartDataset(data));
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  applyFilters() {
    const startYear = +this.yearStartSelector.value!;
    const startMonth = this.monthStartSelector.value!;
    const endYear = +this.yearEndSelector.value!;
    const endMonth = this.monthEndSelector.value!;

    if (startYear > endYear || (startYear === endYear && startMonth >= endMonth)) {
      alert('La fecha de inicio debe ser menor o igual a la fecha de fin.');
      return;
    }

    const filteredData: AssetVariation[] = this.initialData.map((asset) => {
      const filteredVariations = asset.variations.filter((variation) => {
        const [year, month] = variation.month.split('-').map(Number);
        const variationDate = new Date(year, month - 1);
        const startDate = new Date(startYear, startMonth - 1);
        const endDate = new Date(endYear, endMonth - 1);
        return variationDate >= startDate && variationDate <= endDate;
      });
      return {
        assetId: asset.assetId,
        variations: filteredVariations,
      };
    });

    this.chartData.set(lineChartDataset(filteredData));
  }
}
