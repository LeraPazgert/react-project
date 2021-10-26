import React, { useState, useContext } from "react";
import { Grid } from '@material-ui/core';
import { Product } from './Product/Product';
import useStyles from './styles'
import { ProductContext } from "../../context";

export function Products() {
    const classes = useStyles();
    const { storeProducts, handleDetail, isAdmin } = useContext(ProductContext);
    const [search, setSearch] = useState('');

    const filteredArts = storeProducts.filter(art => {
        return art.name.toLowerCase().includes(search.toLowerCase())
    });
    const [stateFilter, setStateFilter] = useState({
        economy: false,
        optimal: false,
        premium: false
    });
    const handleCheckboxEconomy = (event) => {
        const { value } = event.target
        const checked = stateFilter.economy
        setStateFilter(prevState => ({
            ...prevState,
            [value]: !checked
        }));
    }
    const handleCheckboxOptimal = (event) => {
        const { value } = event.target
        const checked = stateFilter.optimal
        setStateFilter(prevState => ({
            ...prevState,
            [value]: !checked
        }));
    }
    const handleCheckboxPremium = (event) => {
        const { value } = event.target
        const checked = stateFilter.premium
        setStateFilter(prevState => ({
            ...prevState,
            [value]: !checked
        }));
    };
    const filterCheck = (arr, filters) => {
        if (!filters.economy && !filters.optimal && !filters.premium) {
            return arr;
        }
        let newArray = []
        for (let key in filters) {
            if (filters[key]) {
                let arrayFilter = arr.filter(item => {
                    return item.priceSegment === key
                })
                newArray = [...newArray, ...arrayFilter]
            }
        }
        return newArray;
    }
    const resultFilter = filterCheck(filteredArts, stateFilter);
    const [stateSort, setStateSort] = useState('alphabet');
    const handleAlphabet = (event) => {
        setStateSort(event.target.value)
    };
    const handleCount = (event) => {
        setStateSort(event.target.value)
    };
    const handlePrice = (event) => {
        setStateSort(event.target.value)
    };
    const handleDate = (event) => {
        setStateSort(event.target.value)
    };
    const sortInput = function (array, value) {
        let resultSortArray = [];
        if (value) {
            let sortArray = [];
            if (value === 'alphabet') {
                sortArray = array.sort((a, b) => {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                });
            } else {
                if (value === 'price') {
                    sortArray = array.sort((a, b) => a.price - b.price)
                } else {
                    if (value === 'count') {
                        sortArray = array.sort((a, b) => a.count - b.count)
                    } else {
                        if (value === 'date') {
                            sortArray = array.sort((a, b) => new Date(b.date) - new Date(a.date))
                        }
                    }
                    resultSortArray = sortArray;
                }
            }
        }
        if (resultSortArray.length) {
            return resultSortArray
        } else {
            return array;
        }
    }
    const resultSort = sortInput(resultFilter, stateSort);
    return (
        <main className={classes.main}>
            <Grid container justify='center' spacing={4} className={classes.products}>
                {resultSort.map(product =>
                    (!isAdmin && product.count !== '0') ?
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} handleDetail={handleDetail} />
                        </Grid> :
                        (isAdmin) &&
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} handleDetail={handleDetail} />
                        </Grid>
                )}
            </Grid>
            <div className={classes.flexColumn}>
                <div className={classes.search}>
                    <input type='text' placeholder='Search...' className={classes.search} onChange={(event) => setSearch(event.target.value)} value={search} />
                </div>
                <div className={classes.flexColumn}>
                    <div className={classes.filter} style={{ backgroundColor: 'white', borderRadius: '8px' }}>
                        <div>Choose price segment:</div>
                        <label>
                            <input type='checkbox' onChange={handleCheckboxEconomy} checked={stateFilter.economy} name='filter' value='economy' />
                            Economy
                        </label>
                        <br />
                        <label>
                            <input type='checkbox' onChange={handleCheckboxOptimal} checked={stateFilter.optimal} name='filter' value='optimal' />
                            Optimal
                        </label>
                        <br />
                        <label>
                            <input type='checkbox' onChange={handleCheckboxPremium} checked={stateFilter.premium} name='filter' value='premium' />
                            Premium
                        </label>
                    </div>
                    <div className={classes.sort} style={{ backgroundColor: 'white', borderRadius: '8px' }}>
                        <div>Sort by:</div>
                        <label>
                            <input type='radio' onChange={handleAlphabet} name='sort' id='alphabetSort' defaultChecked={true} value='alphabet' />
                            Alphabet
                        </label>
                        <br />
                        <label>
                            <input type='radio' onChange={handlePrice} name='sort' id='priceSort' value='price' />
                            Price
                        </label>
                        <br />
                        <label>
                            <input type='radio' onChange={handleCount} name='sort' id='countSort' value='count' />
                            Count
                        </label>
                        <br />
                        <label>
                            <input type='radio' onChange={handleDate} name='sort' id='dateSort' value='date' />
                            Date
                        </label>
                    </div>
                </div>
            </div>
        </main>

    )
}