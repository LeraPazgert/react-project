import React from "react";
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../../context";
import useStyles from './styles';

export default function ProductPage() {
    const classes = useStyles();
    return (
        <ProductConsumer>
            {value => {
                const {
                    id,picture,desc,price,name,article,count,date,company,inCart} = value.detailProduct;
                return (
                    <div className={classes.detailContainer}>
                        <div>
                            <div className={classes.detailName}>{name}</div>
                        </div>
                        <div className={classes.detailFlex}>
                            <div>
                                <img src={picture || 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'} className={classes.detailPicture} alt="" />
                            </div>
                            <div className={classes.detailInfoContainer}>
                                <h3 className={classes.detailInfoName}>Model : {name}</h3>
                                <h4 className={classes.detailInfoCompany}>
                                    made by : <span>{company}</span>
                                </h4>
                                <h4 className={classes.detailInfoPrice}>
                                    <strong>
                                        price : <span>$</span>
                                        {price}
                                    </strong>
                                </h4>
                                <h6 className={classes.detailInfo}>
                                    <strong>
                                        article : 
                                        {article}
                                    </strong>
                                </h6>
                                <h6 className={classes.detailInfo}>
                                    <strong>
                                        count : 
                                        {count}
                                    </strong>
                                </h6>
                                <h6 className={classes.detailInfo}>
                                    <strong>
                                        date : 
                                        {date}
                                    </strong>
                                </h6>
                                <p className={classes.detailInfoDesc}>
                                    some info about product :
                                </p>
                                <p className={classes.detailInfoDescStyle}>{desc}</p>
                                <div className={classes.detailInfoButtons}>
                                    <Link to="/catalog">
                                        <button className={classes.detailInfoButton}>back to products</button>
                                    </Link>
                                    <button className={classes.detailInfoButtonCart}
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id); 
                                        }}
                                    >
                                        {inCart ? "in cart" : "add to cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}


