export interface Book {
  id: number;
  name: string;
  author: string;
  label: string;
  state: string;
  [key: string]: any;
}
