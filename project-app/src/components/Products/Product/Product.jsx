import React, { useContext, useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../context';
import EditIcon from '@material-ui/icons/Edit';

export function Product({ product }) {
    const { id, name, picture, price, inCart} = product;
    const { isAdmin, handleDetail, addToCart, openModal, openEdit } = useContext(ProductContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className={classes.card}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} onClick={handleDetail(id)}>
                    <Link to="/productPage">
                        <img className={classes.image} src={picture || 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'} alt="" />
                    </Link>
                </CardMedia>
                <CardContent>
                    <div className={classes.cardContent}>
                        <div>
                            {name}
                        </div>
                        <Typography variant='h5'>
                            ${price}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions className={classes.cardActions} >
                    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title='Add to cart'>
                        <IconButton aria-label="Add to Cart" disabled={inCart ? true : false}
                            onClick={() => {
                                addToCart(id);
                                openModal(id);
                                handleClose();
                            }}>
                            {inCart ? (
                                <p className="text-capitalize mb-0" style={{ fontSize: '17px' }} disabled>
                                    in cart
                                </p>
                            ) : (
                                <AddShoppingCart />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Edit'>
                        <IconButton aria-label="Edit" hidden={isAdmin ? false : true}
                            onClick={() => {
                                openEdit(id);
                            }}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </div>

    )
}