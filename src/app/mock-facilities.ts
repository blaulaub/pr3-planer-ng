import { Facility } from './facility';

export const FACILITIES: Facility[] = [
  {name: "Lagerhaus"  , wood: 20, bricks: 40, cost:   6000, produces: {}         , consumes: {}},
  {name: "Wohnkomplex", wood: 40, bricks: 80, cost:  14000, produces: {}         , consumes: {}},
  {name: "Sägewerk"   , wood: 20, bricks: 40, cost:   8000, produces: {"Wood": 6}, consumes: {}}
];
