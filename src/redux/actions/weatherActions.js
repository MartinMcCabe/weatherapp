import {
  SHOW_DAY
} from './actionTypes';

export function doShowDay(day) {
  return {
    type: SHOW_DAY,
    day
  }
}
