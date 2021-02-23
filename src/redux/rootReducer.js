import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

let rootReducer = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer
})

export default rootReducer
