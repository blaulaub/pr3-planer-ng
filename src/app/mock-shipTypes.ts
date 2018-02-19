import { ShipType } from './shipType';

export const SHIP_TYPES: ShipType[] = [
  { name: "Linienschiff"   , health: 340, store: 400, cannons: 50, sailors: 250, price: 200000, draft: 2, dailyCost: 340, knots: 14, agility:  70 },
  { name: "Kriegsgaleone"  , health: 320, store: 400, cannons: 46, sailors: 230, price: 180000, draft: 2, dailyCost: 320, knots: 13, agility:  70 },
  { name: "Karacke"        , health: 320, store: 550, cannons: 40, sailors: 200, price: 140000, draft: 2, dailyCost: 320, knots: 12, agility:  75 },
  { name: "Karavelle"      , health: 300, store: 500, cannons: 40, sailors: 200, price: 160000, draft: 2, dailyCost: 300, knots: 11, agility:  75 },
  { name: "Militärfregatte", health: 250, store: 350, cannons: 36, sailors: 180, price: 120000, draft: 1, dailyCost: 250, knots: 12, agility:  85 },
  { name: "Fregatte"       , health: 220, store: 400, cannons: 26, sailors: 130, price:  70000, draft: 1, dailyCost: 220, knots: 11, agility:  80 },
  { name: "Korvette"       , health: 200, store: 350, cannons: 24, sailors: 120, price:  60000, draft: 0, dailyCost: 200, knots: 12, agility:  85 },
  { name: "Pinasse"        , health: 100, store: 200, cannons:  8, sailors:  40, price:  10000, draft: 0, dailyCost: 100, knots: 10, agility: 100 },
  { name: "Handelsfleute"  , health: 300, store: 800, cannons:  0, sailors:   0, price:  50000, draft: 1, dailyCost: 240, knots: 10, agility:  80 },
  { name: "Fleute"         , health: 220, store: 500, cannons: 16, sailors:  80, price:  40000, draft: 1, dailyCost: 220, knots: 10, agility:  85 }
];
