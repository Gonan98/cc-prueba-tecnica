import { ChartConfiguration } from 'chart.js';

export const lineChartOptions: ChartConfiguration<'line'>['options'] = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 16,
        },
      },
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label}: ${context.parsed.y?.toFixed(2)}%`,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 10,
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
};
