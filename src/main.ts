import * as _ from 'lodash'
import { roomAssigner } from './room/assigner'

export const loop = () => {
  _.values(Game.rooms).forEach((room) => {
    roomAssigner.assign(room)
  })
}
