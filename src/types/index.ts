export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  specs: string[];
}

export interface Case {
  id: string;
  name: string;
  location: string;
  type: string;
  description: string;
  image: string;
  materials: string[];
}

export interface News {
  id: string;
  title: string;
  date: string;
  category: string;
  author: string;
  content: string;
  image: string;
}

export interface CompanyStrength {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  name: string;
  path: string;
}