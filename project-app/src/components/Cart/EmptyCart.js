import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5" style={{backgroundColor:'white', maxWidth:'100%'}}>
      <div className="row" style={{marginTop:'180px'}}>
        <div className="col-10 mx-auto text-center text-title text-capitalize" style={{color:'olive'}}>
          <h1>your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
}