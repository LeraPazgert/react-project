import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
    detailContainer: {
        maxWidth: '100%',
        height: '100%',
        margin: 'auto',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    detailName: {
        marginLeft: '40%',
        marginTop: '7%',
        fontWeight: '600',
        color: 'Olive',
        letterSpacing: '2px',
        fontSize: '60px'
    },
    detailFlex: {
        margin: 'auto',
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '80px',
        justifyContent: 'space-around'
    },
    detailPicture: {
        maxWidth: 350,
        height: 350,
        boxShadow: '-0.6em 0 0.7em olive'
    },
    detailInfoContainer: {
        marginLeft: '40px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '-35px',
        justifyContent: 'flex-start',
        maxWidth: '50%',
        height: '80px'
    },
    detailInfoName: {
        fontFamily: 'Roboto, cursive',
        fontWeight:'300',
        color: 'grey',
        letterSpacing: '1px',
    },
    detailInfoCompany: {
        fontFamily: '"Permanent Marker, cursive',
        textTransform: 'uppercase',
        color: '  #2a2a72',
    },
    detailInfoPrice: {
        fontFamily: 'Roboto, cursive',
        fontWeight:'400',
        textTransform: 'uppercase',
        color: 'gold',
    },
    detailInfo:{
        fontFamily: '"Permanent Marker, cursive',
        textTransform: 'uppercase',
        color: 'olive',
    },
    detailInfoDesc: {
        fontFamily: 'Roboto',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '17px',
    },
    detailInfoDescStyle: {
        marginTop: '-15px',
        fontFamily: 'Roboto',
        color: '#232528',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    detailInfoButtons: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    detailInfoButton: {
        textTransform: 'capitalize',
        fontSize: '20px',
        background: 'transparent',
        border: '0.5px solid lightblue',
        color: 'lightblue',
        borderRadius: '10px',
        padding: '5px 10px',
        outlineColor: 'red',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '0.2rem 3rem 5rem 0',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            background: "lightblue",
            color: '#2a2a72'
        },
    },
    detailInfoButtonCart: {
        marginLeft:'-25px',
        textTransform: 'capitalize',
        fontSize: '20px',
        background: 'transparent',
        border: '0.5px solid lightblue',
        color: 'lightblue',
        borderRadius: '10px',
        padding: '5px 10px',
        outlineColor: 'red',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '0.2rem 3rem 5rem 0',
        transition: 'all 0.5s ease-in-out',
        '&:hover': {
            background: "yellow",
            color: '#2a2a72'
        },
    } 

}));