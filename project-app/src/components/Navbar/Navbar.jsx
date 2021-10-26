import React, { useContext } from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography, Tooltip } from '@material-ui/core';
import { ProductContext } from "../../context";
import { ShoppingCart, AccountCircle } from '@material-ui/icons';
import useStyles from './styles'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    const { cartProducts } = useContext(ProductContext);
    return (
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
                <Link to='/catalog' className={classes.link}>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src='https://i.pinimg.com/736x/e0/9c/4b/e09c4b63bf10b7d64fe100ebb4598c0c.jpg' alt='Art shop' height='40px' width='65px' className={classes.image} />
                        Art Territory
                    </Typography>
                </Link>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <Tooltip title='Cart'>
                        <Link to='/cart'>
                            <IconButton aria-label='Show cart items' color='inherit'>
                                <Badge badgeContent={cartProducts} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title='Change account'>
                        <Link to='/login'>
                            <IconButton aria-label='Logout' color='inherit'>
                                <AccountCircle />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;