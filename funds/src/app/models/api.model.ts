export interface RealAsset {
  id: string;
  attributes: {
    name: string;
  };
}

export interface RealAssetDay {
  id: string;
  attributes: {
    date: string;
    price: number;
  };
}
