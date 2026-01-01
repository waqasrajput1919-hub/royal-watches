export interface Watch {
  id: string;
  name: string;
  model: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  category: string;
  isNew?: boolean;
}

export interface Collection {
  name: string;
  description: string;
  image: string;
  count: number;
}