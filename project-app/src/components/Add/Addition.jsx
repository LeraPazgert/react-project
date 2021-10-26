import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../context';
import useStyles from './styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { v4 as uuidv4 } from 'uuid';

export default function Addition() {
  const classes = useStyles();
  const { onAdd, isAdmin } = useContext(ProductContext);

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
  const [dateInput, setDateInput] = useState('');
  const [segmentInput, setSegmentInput] = useState({
    economy: false,
    optimal: false,
    premium: false
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || articleError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, articleError]);

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
  const handleChangeDate = (event) => {
    setDateInput(event.target.value);
  };
  const handleCheckboxEconomy = (event) => {
    const { value } = event.target
    const checked = segmentInput.economy
    setSegmentInput({
      [value]: !checked
    });
  }
  const handleCheckboxOptimal = (event) => {
    const { value } = event.target
    const checked = segmentInput.optimal
    setSegmentInput({
      [value]: !checked
    });
  }
  const handleCheckboxPremium = (event) => {
    const { value } = event.target
    const checked = segmentInput.premium
    setSegmentInput({
      [value]: !checked
    });
  };
  const handleAdd = (event) => {
    event.preventDefault();
    const newItem = {
      name: nameInput,
      article: articleInput,
      count: countInput,
      price: priceInput,
      date: dateInput,
      picture: pictureInput,
      desc: descInput,
      priceSegment: Object.keys(segmentInput).toString(),
      id: uuidv4(),
    }
    onAdd(newItem);
    setNameInput('');
    setArticleInput('');
    setCountInput('');
    setPriceInput('');
    setDateInput('');
    setPictureInput('');
    setDescInput('');
    setSegmentInput('');
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
  if (!isAdmin) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Add new product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className={classes.details} onSubmit={handleAdd}>
            <fieldset className={classes.info}>
              <legend style={{ fontSize: '20px' }}>Main information</legend>
              {(nameDirty && nameError) && <div style={{ color: 'red', fontSize: '11px', marginRight: '10px' }}>{nameError}</div>}
              <label style={{ color: '#3d3b3b', fontSize: '15px', marginBottom: '7px' }}><input style={{ marginRight: '7px' }} name='name' type='text' value={nameInput} onChange={handleChangeName} onBlur={e => handleBlur(e)} required />Name</label>
              {(articleDirty && articleError) && <div style={{ color: 'red', fontSize: '11px', width: '220px'}}>{articleError}</div>}
              <label style={{ color: '#3d3b3b', fontSize: '15px', marginBottom: '7px' }}><input style={{ marginRight: '7px' }} name='article' type='text' value={articleInput} onChange={handleChangeArticle} onBlur={e => handleBlur(e)} required />Article</label>
              {(countDirty && countError) && <div style={{ color: 'red', fontSize: '11px' }}>{countError}</div>}
              <label style={{ color: '#3d3b3b', fontSize: '15px', marginBottom: '7px' }}><input style={{ marginRight: '7px' }} name='count' min='0' type='number' value={countInput} onChange={handleChangeCount} onBlur={e => handleBlur(e)} required />Count</label>
              <label style={{ color: '#3d3b3b', fontSize: '15px', marginBottom: '7px' }}><input style={{ marginRight: '7px' }} name='price' min='1' type='number' value={priceInput} onChange={handleChangePrice} required />Price</label>
              <label style={{ color: '#3d3b3b', fontSize: '15px' }}><input style={{ marginRight: '7px' }} name='date' type='date' value={dateInput} onChange={handleChangeDate} required />Creation date</label>
            </fieldset>
            <fieldset className={classes.info}>
              <legend style={{ fontSize: '20px' }}>Price segment</legend>
              <label style={{ color: '#3d3b3b', fontSize: '15px', marginBottom: '7px' }} >
                <input style={{ marginRight: '7px' }} name='radio' value='economy' type='radio' onChange={handleCheckboxEconomy} required checked={segmentInput.economy} />
                Economy
              </label>
              <label style={{ color: '#3d3b3b', fontSize: '15px', marginBottom: '7px' }}>
                <input style={{ marginRight: '7px' }} name='radio' value='optimal' type='radio' onChange={handleCheckboxOptimal} checked={segmentInput.optimal} />
                Optimal
              </label>
              <label style={{ color: '#3d3b3b', fontSize: '15px' }} >
                <input style={{ marginRight: '7px' }} name='radio' value='premium' type='radio' onChange={handleCheckboxPremium} checked={segmentInput.premium} />
                Premium
              </label>
            </fieldset>
            <fieldset className={classes.info}>
              <legend style={{ fontSize: '20px' }}>Secondary information</legend>
              <label style={{ color: '#3d3b3b', fontSize: '15px', marginBottom: '7px' }}><input style={{ marginRight: '7px' }} name='picture' type='text' value={pictureInput} onChange={handleChangePicture} />Picture</label>
              <label style={{ color: '#3d3b3b', fontSize: '15px' }}><textarea name='desc' style={{ marginRight: '7px' }} value={descInput} onChange={handleChangeDesc} />Description</label>
              <input className={classes.save} disabled={!formValid} type='submit' value='add' />
            </fieldset>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}


