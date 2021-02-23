import {BUY_CAKE} from './cakeTypes'

let initialState = {
  numOfCakes: 10
}

let cakeReducer = (state= initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
     ...state,
     numOfCakes: state.numOfCakes - action.payload
   }
   default: return state
  }
}

export default cakeReducer
