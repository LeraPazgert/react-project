import React, { Component } from "react";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
import useStyles from './styles';

export default function Cart() {
    const classes = useStyles();
    return (
        <section>
            <ProductConsumer>
                {value => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return (
                            <div className={classes.cart}>
                                <div className={classes.cartTitle}>
                                    Your cart
                                </div>
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value}/>
                            </div>
                        );
                    } else {
                        return <EmptyCart />;
                    }
                }}
            </ProductConsumer>
        </section>
    );
}