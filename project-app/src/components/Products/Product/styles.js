import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        maxWidth: '90%',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    card: {
        maxWidth: '100%',
        transition: '2s ease',
        '&:hover': {
            transition: 'all 0.7s ease-in-out',
            transform: "scale(0.9)"
        },
    },
    media: {
        height: 70,
    },
    image: {
        margin: '10px 20px 0 23px',
        width: 230,
        height: 230,
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        height: 10,
        marginTop: '70%',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'grey'
    },
    desc: {
        color: 'grey',
        fontSize: '13px',
        fontWeight: '300'
    }
}));