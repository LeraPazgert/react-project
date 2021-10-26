import React, { useContext, useState } from 'react';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { ProductContext } from '../../context';

export function HomePage(props) {
    const title = props.title
    const classes = useStyles();
    const history = useHistory();
    const { admin, user } = useContext(ProductContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    
    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleEnter = (event) => {
        event.preventDefault();
        const loginAdmin = 'admin';
        const passwordAdmin = '123';
        const loginUser = 'user';
        const passwordUser = '123';
    
        if (!(login === loginAdmin && password === passwordAdmin) || !(login === loginUser && password === passwordUser)) {
            setLoginError('Wrong login or password!')
        }
        if (login === loginAdmin && password === passwordAdmin) {
            setLoginError('')
            admin();
            history.push('/catalog');
        }
        if (login === loginUser && password === passwordUser) {
            setLoginError('')
            user();
            history.push('/catalog');
        }
    }
    return (
        <div className={classes.homeCont}>
            <Box
                sx={{
                    '& > :not(style)': {
                        width: 500,
                        height: 420,
                        margin: 'auto',
                    },
                }}
            >
                <Paper elevation={3}>
                    <form className={classes.loginCont} onSubmit={handleEnter}>
                        <img src='https://i.pinimg.com/736x/e0/9c/4b/e09c4b63bf10b7d64fe100ebb4598c0c.jpg' alt='Art shop' height='40px' width='65px' className={classes.image} />
                        <h1 className={classes.loginTitle}>{title}</h1>
                        <div className={classes.loginFlex}>
                            <input type='text' placeholder='User name' value={login} onChange={handleChangeLogin} className={classes.loginInput} required />
                            <input type='password' placeholder='Password' value={password} onChange={handleChangePassword} className={classes.loginInput} required />
                        </div>
                        {(loginError) && <div style={{ color: '#c21111', fontSize: '18px', marginLeft: '150px', marginTop: '20px', fontFamily: 'Roboto' }}>{loginError}</div>}
                        <div>
                            <input className={classes.loginEnter} type='submit' value='Enter' />
                        </div>
                    </form>
                </Paper>
            </Box>
        </div>
    )
}
