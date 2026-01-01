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

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ProductInquiry {
  name: string;
  email: string;
  phone: string;
  productName: string;
  message: string;
}