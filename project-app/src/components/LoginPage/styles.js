import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    homeCont: {
        height:'100vh',
        backgroundColor: 'rgb(229, 239, 245)', 
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    loginCont: {
        backgroundColor: 'white', 
        borderRadius: '10px',
        width: '500px',
        height: '420px',
        margin: 'auto', 
    },
    image:{
        width: '120px',
        height: '120px',
        margin:'1rem 3rem 1rem 12rem'
    },
    loginTitle: {
        fontFamily: 'Roboto',
        position: 'absolute',
        textAlign: 'center',
        color: 'white',
        margin: '0 2rem 0 6.5rem',
        background:'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',
    },
    loginInput: {
        height: '35px',
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontSize: '17px',
        marginTop: '6rem',
        border:'none',
        borderBottom: '3px solid #f2e5e1',
        borderRight: '3px solid #f2e5e1',
        borderRadius: '10px',
    },
    loginFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    loginEnter: {
        fontFamily:'Roboto',
        fontSize: '22px',
        background:'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',
        border: '0.5px solid white',
        color: 'white',
        borderRadius: '10px',
        padding: '5px 5px',
        cursor: 'pointer',
        display: 'inline-block',
        marginTop: '30px',
        marginLeft: '40px',
        transition: '2s ease',
        '&:hover': {
            transition: 'all 0.7s ease-in-out',
            transform: "scale(1.3)",
            background:'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)',
           
        },
    }
}));
