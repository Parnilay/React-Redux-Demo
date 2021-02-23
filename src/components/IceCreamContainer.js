import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(Props){
  return (
    <div>
    <h1>Number of Ice Cream - {Props.numOfIceCreams}</h1>
    <button onClick={Props.buyIceCream}>Buy Cake</button>
    </div>
  )
}

let mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

let mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
