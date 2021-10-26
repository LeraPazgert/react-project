import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    cart: {
        marginTop:'65px',
        height:800
    },
    cartTitle: {
        textAlign: 'center',
        color: '  #2a2a72',
        fontSize: '30px',
        textTransform: 'uppercase',
        fontStyle:'italic',
        maxWidth: '300px',
        margin: 'auto',
        background:'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',
        borderRadius: '10px',
        padding: '10px',
    },
    cartColumns: {
        marginTop: '40px',
        fontFamily: 'Roboto',
    },
    rows:{
        fontFamily: 'Roboto',
    }
}));