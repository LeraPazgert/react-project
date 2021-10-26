import { makeStyles, alpha } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        background: 'radial-gradient(circle at 50% -20.71%, #d6d4f1 0, #dad3ef 6.25%, #dfd2ed 12.5%, #e3d0ea 18.75%, #e7cfe8 25%, #eacfe4 31.25%, #edcee1 37.5%, #f0cdde 43.75%, #f2cdda 50%, #f4cdd6 56.25%, #f5cdd3 62.5%, #f5cdcf 68.75%, #f5cdcb 75%, #f5cec8 81.25%, #f4cec5 87.5%, #f3cfc2 93.75%, #f1d0c0 100%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 40,
        paddingRight: '10px',
        marginLeft: '5px',
    },
    link: {
        color: '#000 !important',
        textDecoration: 'none'
    },
    image: {
        marginRight: '10px',
        paddingLeft:'10px',
    },
    grow: {
        flexGrow: 1,
    },
    inputRoot: {
        color: 'inherit',
    },
}));