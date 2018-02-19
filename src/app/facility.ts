export class Facility {
  name: string;
  wood: number;
  bricks: number;
  cost: number;
  produces: { [key: string]: number };
  consumes: { [key: string]: number };
}
