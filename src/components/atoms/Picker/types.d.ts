export interface StyleProps {
  container: object;
  button: object;
  input: object;
}

export interface PickerProps {
  value?: string;
  onChange(value: string): void;
  onIncrease?(): void;
  onDecrease?(): void;
  max: number;
  decreaseButtonColor?: string;
}
