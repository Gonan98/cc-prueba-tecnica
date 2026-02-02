export interface Price {
  date: string; // yyyy-mm-dd
  value: number;
}

export interface Variation {
  month: string; // yyyy-mm
  value: number;
}

export interface AssetVariation {
  assetId: string;
  variations: Variation[];
}
