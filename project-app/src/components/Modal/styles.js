import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    modalContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
    },
    modal: {
        maxWidth: '500px',
        height: '400px',
        margin: 'auto',
        background: 'white'
    },
    modalTitle: {
        textAlign:'center',
        color:'olive',
        textTransform: 'uppercase',
        fontSize:'25px'
    },
    modalPicture:{
        maxWidth:'200px',
        height:'200px'
    },
    modalButton: {
        textTransform: 'capitalize',
        fontSize: '20px',
        background: 'transparent',
        border: '0.5px solid lightblue',
        color: 'lightblue',
        borderRadius: '10px',
        padding: '5px 5px',
        outlineColor: 'red',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '0.6rem 1rem 5rem 1rem',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            background: "lightblue",
            color: '#2a2a72'
        },
    },
}));