import { Facility } from './facility';

export const FACILITIES: Facility[] = [
  {
    name: "Lagerhaus"  , wood: 20, bricks: 40, cost:   6000, isFarm: false,
    produces: [],
    consumes: []
  },
  {
    name: "Wohnkomplex", wood: 40, bricks: 80, cost:  14000, isFarm: false,
    produces: [],
    consumes: []
  },
  {
    name: "Sägewerk"   , wood: 20, bricks: 40, cost:   8000, isFarm: false,
    produces: [{good: "Wood", amount: 6}],
    consumes: []
  },
  {
    name: "Ziegelei"   , wood: 20, bricks: 40, cost:   8000, isFarm: false,
    produces: [{good: "Bricks", amount: 6}],
    consumes: []
  },
  {
    name: "Weizenfarm"   , wood: 20, bricks: 40, cost:   8000, isFarm: true,
    produces: [{good: "Wheat", amount: 6}],
    consumes: []
  },
  {
    name: "Obstfarm"   , wood: 20, bricks: 40, cost:   8000, isFarm: true,
    produces: [{good: "Fruits", amount: 4}],
    consumes: []
  },
  {
    name: "Maisfarm"   , wood: 20, bricks: 40, cost:   8000, isFarm: true,
    produces: [{good: "Corn", amount: 4}],
    consumes: []
  },
  {
    name: "Zuckerrohrfarm"   , wood: 20, bricks: 40, cost:   8000, isFarm: true,
    produces: [{good: "Sugar", amount: 4}],
    consumes: []
  },
  {
    name: "Hanfplantage"   , wood: 20, bricks: 40, cost:   8000, isFarm: true,
    produces: [{good: "Hemp", amount: 4}],
    consumes: []
  },
  {
    name: "Baumwollfarm"   , wood: 30, bricks: 60, cost:   8000, isFarm: true,
    produces: [{good: "Cotton", amount: 4}],
    consumes: []
  },
  {
    name: "Giesserei"   , wood: 40, bricks: 80, cost:  10000, isFarm: false,
    produces: [{good: "Metal", amount: 3}],
    consumes: [{good: "Wood", amount: 1.5}]
  },
  {
    name: "Bäckerei"   , wood: 40, bricks: 80, cost:  10000, isFarm: false,
    produces: [{good: "Bread", amount: 2}],
    consumes: [{good: "Wheat", amount: 1}, {good: "Sugar", amount: 1}]
  },
  {
    name: "Brennerei"   , wood: 40, bricks: 80, cost:  10000, isFarm: false,
    produces: [{good: "Rum", amount: 1}],
    consumes: [{good: "Wood", amount: 0.5}, {good: "Sugar", amount: 1}]
  },
  {
    name: "Weberei"   , wood: 40, bricks: 80, cost:  12000, isFarm: false,
    produces: [{good: "Textiles", amount: 2}],
    consumes: [{good: "Cotton", amount: 2}]
  },
  {
    name: "Seilerei"   , wood: 40, bricks: 80, cost:  12000, isFarm: false,
    produces: [{good: "Ropes", amount: 2}],
    consumes: [{good: "Hemp", amount: 2}]
  },
  {
    name: "Viehhof"   , wood: 40, bricks: 80, cost:  12000, isFarm: true,
    produces: [{good: "Meat", amount: 2}],
    consumes: [{good: "Corn", amount: 2}]
  },
  {
    name: "Schneiderei"   , wood: 60, bricks: 120, cost:  18000, isFarm: false,
    produces: [{good: "Clothing", amount: 1}],
    consumes: [{good: "Textiles", amount: 1}, {good: "Dyes", amount: 1}]
  },
  {
    name: "Schmied"   , wood: 60, bricks: 120, cost:  16000, isFarm: false,
    produces: [{good: "Metal Goods", amount: 2}],
    consumes: [{good: "Wood", amount: 1}, {good: "Metal", amount: 2}]
  },
  {
    name: "Tabakplantage"   , wood: 20, bricks: 40, cost:  8000, isFarm: true,
    produces: [{good: "Tobacco", amount: 2}],
    consumes: []
  },
  {
    name: "Farbstoffhof"   , wood: 20, bricks: 40, cost:  8000, isFarm: true,
    produces: [{good: "Dyes", amount: 2}],
    consumes: []
  },
  {
    name: "Kaffeeplantage"   , wood: 40, bricks: 80, cost:  10000, isFarm: true,
    produces: [{good: "Coffee", amount: 2}],
    consumes: [{good: "Metal Goods", amount: 0.5}]
  },
  {
    name: "Kakaoplantage"   , wood: 40, bricks: 80, cost:  10000, isFarm: true,
    produces: [{good: "Coffee", amount: 2}],
    consumes: [{good: "Cocoa", amount: 0.5}]
  },
  {
    name: "Schule"   , wood: 60, bricks: 120, cost:  14000, isFarm: false,
    produces: [],
    consumes: []
  },
  {
    name: "Spital"   , wood: 60, bricks: 120, cost:  14000, isFarm: false,
    produces: [],
    consumes: []
  },
  {
    name: "Residenz"   , wood: 200, bricks: 400, cost:  200000, isFarm: false,
    produces: [],
    consumes: []
  },
  {
    name: "Grosse Werft", wood: 100, bricks: 200, cost:  50000, isFarm: false,
    produces: [],
    consumes: []
  }
];
