import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import useStyles from './styles'
import { ProductContext } from "../../context";

export default function Order() {
    const classes = useStyles();
    const { orderOpen, closeOrder} = useContext(ProductContext);
    const history = useHistory();

    const onContinue = () => {
        closeOrder();
        history.push('/catalog');
    };
    if (!orderOpen) {
        return null;
    }
    return (
        <div className={classes.modalContainer}>
            <div className={classes.modal}>
                <div className="row">
                    <div className={classes.modalTitle}>
                        <div>your order is completed</div>
                        <button className={classes.modalButton}
                            onClick={onContinue}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}