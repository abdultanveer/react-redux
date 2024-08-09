import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

export  function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes - {props.numCakes}</h2>
        <button  onClick={props.buyCake}>buy cake</button>
    </div>
  )
}

//convert state to props
const mapStateToProps = state => {
    return {
        numCakes: state.numCakes
    }
}

//convert dispatch to props
const mapDispatchToProps = dispatch =>{
   return {
    buyCake: () => dispatch(buyCake())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
