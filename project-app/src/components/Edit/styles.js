import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
    editContainer: {
        maxWidth: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column'
    },
    editForm: {
        maxWidth: '750px',
        height: '520px',
        margin: 'auto',
        top:'30px',
        background: 'white'
    },
    editTitle: {
        textAlign: 'center',
        color: 'olive',
        textTransform: 'uppercase',
        fontSize: '25px'
    },
    editInput:{
        margin: '0.6rem 0.3rem 0.2rem 1rem',
        border: '0.5px solid olive',
        borderRadius: '10px',
        fontSize: '18px',
        color:'grey'
    },
    save: {
        width:'80px',
        height:'50px',
        textAlign:'center',
        textTransform: 'uppercase',
        background: 'transparent',
        border: '0.5px solid olive',
        color: 'olive',
        borderRadius: '10px',
        outlineColor: 'red',
        cursor: 'pointer',
        display: 'inline-block',
       marginTop:'1rem',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            background: "lightblue",
            border:'none',
            color: '#2a2a72'
        },
    }, 
    editClose:{
        fontSize: '40px',
        color:'red',
        marginTop:'90px',
        marginBottom:'-50px'
    }
}));
