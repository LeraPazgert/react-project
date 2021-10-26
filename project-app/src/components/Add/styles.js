import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        width: '70%',
        height:'100%',
        marginTop: '65px',
        marginLeft: '200px'
    },
    heading: {
        textAlign: 'center',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    details: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        color: 'olive', 
    },
    save: {
        maxWidth:'185px',
        height:'50px',
        textTransform: 'uppercase',
        fontSize: '30px',
        background: 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',
        border: '2px solid white',
        color: 'white',
        borderRadius: '10px',
        outlineColor: 'green',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '2.5rem 0 0 0 ',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            transition: 'all 0.7s ease-in-out',
            transform: "scale(1.3)",
            background:'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)',
           
        },
    }, 
}));