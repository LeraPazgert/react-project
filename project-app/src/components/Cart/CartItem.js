import React, { Component } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip } from '@material-ui/core';
export default class CartItem extends Component {
  render() {
    const { id, name, picture, price, total, countInCart } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;
    
    return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={picture || 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 " style={{ fontFamily: 'Roboto' }}>
          <span className="d-lg-none"></span> {name}
        </div>
        <div className="col-10 mx-auto col-lg-2 " style={{ fontFamily: 'Roboto', fontWeight: 'lighter' }}>
          <strong>
            <span className="d-lg-none"></span> ${price}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 " style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return decrement(id);
                }}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{countInCart}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => {
                  return increment(id);
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <Tooltip title='Remove'>
          <div className="col-10 mx-auto col-lg-2 " style={{ color: 'grey' }}>
            <div className=" cart-icon" onClick={() => removeItem(id)}>
              <DeleteIcon style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </Tooltip>
        <div className="col-10 mx-auto col-lg-2 " style={{ fontFamily: 'Roboto', fontWeight: 'lighter' }}>
          <strong>item total : ${total} </strong>
        </div>
      </div>
    );
  }
}