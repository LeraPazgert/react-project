import React, { useState, useContext, useEffect } from 'react';
import useStyles from './styles';
import { ProductContext } from "../../context";
import { Button, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';

export default function Edit() {
    const classes = useStyles();
    const { editOpen, closeEdit, editProduct, onEdit, deleteItem } = useContext(ProductContext);
    const { picture, name, price, article, count, id, desc, priceSegment } = editProduct;

    const [nameInput, setNameInput] = useState('');
    const [nameDirty, setNameDitry] = useState(false);
    const [nameError, setNameError] = useState('');
    const [articleInput, setArticleInput] = useState('');
    const [articleDirty, setArticleDirty] = useState(false);
    const [articleError, setArticleError] = useState('');
    const [countInput, setCountInput] = useState('');
    const [countError, setCountError] = useState('');
    const [countDirty, setCountDirty] = useState(false);
    const [priceInput, setPriceInput] = useState('');
    const [pictureInput, setPictureInput] = useState('');
    const [descInput, setDescInput] = useState('');
    const [segmentInput, setSegmentInput] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (nameError || articleError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, articleError])

    const handleChangeName = (event) => {
        setNameInput(event.target.value);
    };
    const handleChangeArticle = (event) => {
        setArticleInput(event.target.value);
    };
    const handleChangeCount = (event) => {
        setCountInput(event.target.value);
    };
    const handleChangePrice = (event) => {
        setPriceInput(event.target.value);
    };
    const handleChangePicture = (event) => {
        setPictureInput(event.target.value);
    };
    const handleChangeDesc = (event) => {
        setDescInput(event.target.value);
    };
    const handleChangeSegment = (event) => {
        setSegmentInput(event.target.value);
    };
    const handleSave = (event) => {
        event.preventDefault();
        const editedItem = {
            name: nameInput || name,
            article: articleInput || article,
            count: countInput || count,
            price: priceInput || price,
            date: new Date().toLocaleString(),
            picture: pictureInput || picture,
            desc: descInput || desc,
            priceSegment: segmentInput || priceSegment,
            id: id
        }
        onEdit(editedItem)
        setNameInput('');
        setArticleInput('');
        setCountInput('');
        setPriceInput('');
        setPictureInput('');
        setDescInput('');
        setSegmentInput('');
    };
    const handleClose = () => {
        closeEdit();
    };
    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDitry(true)
                if (e.target.value.length < 5) {
                    setNameError('This input should contain at least 5 characters');
                    if (!e.target.value) {
                        setNameError('This input should contain at least 5 characters');
                    }
                } else {
                    setNameError('');
                }
                break;
            case 'article':
                setArticleDirty(true)
                const re = /([A-Z\.]{1})+[0-9\.]{2,}/;
                if (!re.test(e.target.value)) {
                    setArticleError('This input should start with 1 capital Latin letter and then contain at least 2 numbers');
                } else {
                    setArticleError('')
                }
                break;
            case 'count':
                setCountDirty(true);
                if (!(e.target.value % 1 === 0)) {
                    setCountError('Price should be integer')
                } else {
                    setCountError('')
                }
                break;
        }
    }
    if (!editOpen) {
        return null;
    }
    return (
        <div className={classes.editContainer}>
            <Tooltip title='Close'>
                <Button>
                    <CancelIcon onClick={handleClose} className={classes.editClose} />
                </Button>
            </Tooltip>
            <form className={classes.editForm} onSubmit={handleSave}>
                <div className={classes.editTitle}>
                    edit card
                </div>
                {(nameDirty && nameError) && <div style={{ color: 'red', fontSize: '11px', marginLeft: '20px', marginRight: '10px' }}>{nameError}</div>}
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input name='name' onBlur={e => handleBlur(e)} defaultValue={name} onChange={handleChangeName} type='text' className={classes.editInput} required />Name</label>
                <br />
                {(articleDirty && articleError) && <div style={{ color: 'red', fontSize: '11px', marginLeft: '20px', marginRight: '10px', maxWidth: '285px' }}>{articleError}</div>}
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input name='article' onBlur={e => handleBlur(e)} defaultValue={article} onChange={handleChangeArticle} type='text' className={classes.editInput} required />Article</label>
                <br />
                {(countDirty && countError) && <div style={{ color: 'red', fontSize: '11px', marginLeft: '20px', marginRight: '10px' }}>{countError}</div>}
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input defaultValue={count} onBlur={e => handleBlur(e)} onChange={handleChangeCount} type='number' min='0' className={classes.editInput} required />Count</label>
                <br />
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input defaultValue={price} onChange={handleChangePrice} type='number' min='1' className={classes.editInput} required />Price</label>
                <br />
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input defaultValue={picture} onChange={handleChangePicture} type='text' className={classes.editInput} />Picture</label>
                <br />
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input defaultValue={desc} onChange={handleChangeDesc} type='text' className={classes.editInput} />Description</label>
                <br />
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input value='economy' onChange={handleChangeSegment} type='radio' name='radio' className={classes.editInput} required />Economy</label>
                <br />
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input value='optimal' onChange={handleChangeSegment} type='radio' name='radio' className={classes.editInput} />Optimal</label>
                <br />
                <label style={{ color: '#3d3b3b', fontSize: '20px' }}><input value='premium' onChange={handleChangeSegment} type='radio' name='radio' className={classes.editInput} />Premium</label>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Tooltip title='Save'>
                        <div>
                            <input className={classes.save} disabled={!formValid} type='submit' value='save' />
                        </div>
                    </Tooltip>
                    <Tooltip title='Delete'>
                        <div aria-label="delete"
                            onClick={deleteItem(id)}>
                            <DeleteIcon className={classes.save} />
                        </div>
                    </Tooltip>
                </div>
            </form>
        </div>
    )
}
