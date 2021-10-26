import React, { useContext } from "react";
import { ProductContext } from "../../context";

export default function CartTotals() {
  const { openOrder, cartTotal, cartProducts, cart } = useContext(ProductContext);
  const emptyCart = cart.length === 0 ? true : false;
  return (
    <div>
      {!emptyCart && (
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <div>
                <button
                  className="btn text-uppercase mb-3 px-5"
                  style={{ color: 'darkblue', border: '1px solid darkblue' }}
                  type="button"
                  onClick={() => {
                    openOrder();
                  }}
                >
                  checkout
                </button>
              </div>
              <h5>
                <span className="text-title"> Product in cart :</span>{" "}
                <strong>{cartProducts} </strong>
              </h5>
              <h5>
                <span className="text-title"> total :</span>{" "}
                <strong>$ {cartTotal} </strong>
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}