import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";

/**
 * This component decrement the no of cakes in the cake store
 * @param {*} props 
 * @returns 
 */
function CakeContainer(props) {
  return (
    <>
    <div>
      <h2> num of cakes are-{props.numCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
    <div>
      <h2> num of icreams are-{props.numIcreams}</h2>
      <button onClick={props.buyIcecream}>buy iceCream</button>
    </div>
    </>
  );
}
//convert state to props
const mapStateToProps = (state) => {
  return {
    numCakes: state.cake.numCakes,
    numIcreams: state.iceCream.numIcreams,

  };
};

//convert dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
