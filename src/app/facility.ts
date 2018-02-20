export class Facility {
  name: string;
  wood: number;
  bricks: number;
  cost: number;
  isFarm: boolean;
  produces: AmountOfGood[];
  consumes: AmountOfGood[];
}

export class AmountOfGood {
  good: string;
  amount: number;
}
