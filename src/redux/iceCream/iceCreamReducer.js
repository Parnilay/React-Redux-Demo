import {
  BUY_ICECREAM
} from './iceCreamTypes'

let initialState = {
  numOfIceCreams: 58
}

let iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload
      }
      default:
        return state
  }
}

export default iceCreamReducer
