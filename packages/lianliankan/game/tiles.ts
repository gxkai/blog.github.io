
export type Tile = string;

interface TileMeta {
  id: number;
  tint?: number;
}

export const TILES: Record<string, TileMeta> = {
  EMPTY: { id: 99 },
  FLOOR: { id: 23 },
  WALL: { id: 21 },
  WOOD: { id: 30 },
  GRASS: { id: 22 },
  GRASS_TALL: { id: 13 },

  TREE_A: { id: 11 },
  TREE_B: { id: 12 },

  DOOR_CLOSED: { id: 31 },
  DOOR_OPEN: { id: 32 },

  WATER_DEEP: { id: 33 },
  WATER_SHALLOW: { id: 34 },
  LAVA: { id: 43 },

  STAIR_UP: { id: 40 },
  STAIR_DOWN: { id: 41 },

  HUMAN: { id: 53 },
  GOBLIN: { id: 1 },
  GOBLIN_ARCHER: { id: 1, tint: 0x66ff66 },

  GOLD: { id: 0 },
  KEY: { id: 50 },
  SWORD: { id: 51 },
  SHIELD: { id: 52 },
  watermelon: { id: 60 },
  mongo: { id: 61 },
  banana: { id: 62 },
  orange: { id: 63 },
  grape: { id: 64 },
  litchi: { id: 65 },
  Potato: { id: 66 },
  strawberry: { id: 67 },
};
