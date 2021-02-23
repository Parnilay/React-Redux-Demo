import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer(){
  let numOfCakes = useSelector(state => state.cake.numOfCakes)
  let dispatch = useDispatch()
  return (
    <div>
    <h1>Number Of Cakes - {numOfCakes}</h1>
    <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
