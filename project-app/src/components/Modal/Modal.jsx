import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import useStyles from './styles'
import { ProductContext } from "../../context";

export default function Modal() {
    const classes = useStyles();
    const { modalOpen, closeModal, modalProduct } = useContext(ProductContext);
    const { picture, name, price } = modalProduct;
    const history = useHistory();

    const onContinue = () => {
        closeModal();
        history.push('/catalog');
    };
    const goToCart = () => {
        closeModal();
        history.push('/cart');
    };
    if (!modalOpen) {
        return null;
    }
    return (
        <div className={classes.modalContainer}>
            <div className={classes.modal}>
                <div className="row">
                    <div  className={classes.modalTitle}>
                        <div>item added to cart</div>
                        <img src={picture} className={classes.modalPicture} alt="" />
                        <h5>{name}</h5>
                        <h5 className="text-muted">price : ${price}</h5>
                        <button className={classes.modalButton}
                                onClick={onContinue}
                        >
                            Continue Shopping
                        </button>
                        <button className={classes.modalButton}
                            cart
                            onClick={goToCart}
                        >
                            Go To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
