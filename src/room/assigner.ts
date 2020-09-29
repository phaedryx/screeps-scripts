import { level0 } from './level0'
import { level3 } from './level3'
import { level4 } from './level4'
import { level5 } from './level5'
import { level6 } from './level6'
import { level7 } from './level7'
import { level8 } from './level8'
import { level1 } from './level1'
import { level2 } from './level2'

type Level = {
  run: (room: Room) => void
}

const lookup: { [k: string]: Level } = {
  "0": level0 as Level,
  "1": level1 as Level,
  "2": level2 as Level,
  "3": level3 as Level,
  "4": level4 as Level,
  "5": level5 as Level,
  "6": level6 as Level,
  "7": level7 as Level,
  "8": level8 as Level,
}

export const roomAssigner = {
  assign: (room: Room) => {
    if (!room.controller || !room.controller.my) {
      return
    }

    const level = room.controller.level.toString()
    lookup[level].run(room)
  }
}