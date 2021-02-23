import {BUY_ICECREAM} from './iceCreamTypes'

export let buyIceCream = (n = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: n
  }
}
