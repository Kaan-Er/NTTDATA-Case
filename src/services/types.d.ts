export type TestProps = (
  email: string,
  password: string,
) => Promise<TestResult>;

//* Api's result types
export interface TestResult {
  test: string;
}
