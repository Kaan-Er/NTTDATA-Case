export type TestProps = (
  email: string,
  password: string,
) => Promise<TestResult>;

//* Api's result types
export interface TestResult {
  test: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  shippingMethod: string;
}

export type GetProductsProps = () => Promise<Product[]>;
