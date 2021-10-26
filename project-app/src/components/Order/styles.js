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
        margin: 'auto',
        background: 'white',
        border: '3px solid lightblue',
        borderRadius:'10px'
    },
    modalTitle: {
        textAlign:'center',
        color:'olive',
        marginTop:'20px',
        padding: '0px 25px',
        textTransform: 'uppercase',
        fontSize:'25px',
        fontStyle:'italic',
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
        margin: '2rem 1rem 2rem 1rem',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            background: "lightblue",
            color: '#2a2a72'
        },
    },
}));