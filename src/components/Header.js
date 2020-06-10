import React from "react";
import { connect } from "react-redux";
// The connect() function connects a React component to a Redux store.
//It provides its connected component with the pieces of the data it needs
//from the store, and the functions it can use to dispatch actions to the store.

//It is called every time the store state changes. It receives the entire store
//state, and should return an object of data this component needs.

const Header = (props) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps, {})(Header);
