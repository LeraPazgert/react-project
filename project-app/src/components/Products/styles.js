import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    main:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        height:'100%',
    },
    flexColumn:{
        marginTop:'85px',
        marginRight:'10px',
        background:'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)',
        display:'flex',
        flexDirection:'column',
        height:'400px',
        color:'white'
    },
    products: {
        marginTop: '70px',
        marginLeft:'5px',   
    },
    search:{
        background:'white',
        border: '0.5px solid lightblue',
        color: 'grey',
        maxWidth:'200px',
        fontFamily: 'Roboto',
        fontStyle:'italic ',
        fontWeight:'200',
        textTransform: 'uppercase',
        
    },
    filter:{
        marginTop:'-60px',
        marginLeft:'10px',
        fontSize:'20px',
        fontFamily: 'Roboto',
        fontStyle:'italic ',
        fontWeight:'200',
        color: '  #7f7e7e',
        borderBottom:'0.5px solid lightblue'
    },
    sort:{
        marginTop:'20px',
        marginLeft:'10px',
        fontSize:'20px',
        fontFamily: 'Roboto',
        fontStyle:'italic ',
        fontWeight:'200',
        borderBottom:'0.5px solid lightblue',
        color: '  #7f7e7e',
    },
}));