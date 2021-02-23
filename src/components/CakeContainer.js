import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(Props){
  return (
    <div>
    <h1>Number of Cakes - {Props.numOfCakes}</h1>
    <button onClick={Props.buyCake}>Buy Cake</button>
    </div>
  )
}

let mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

let mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
