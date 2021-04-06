import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';
import LocalMall from '@material-ui/icons/LocalMall';

export default function Product() {
    const styles ={
        productBox : {
            border : '1px solid lightgrey',
            borderRadius : '5px',
            width : '13rem',
            padding : '5px',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            margin : '1rem'
        },
        productImg : {
            width : '12rem',
            border : '1px solid lightgrey',
            borderRadius : '5px',
            objectFit : 'cover'
        }
    }
    return (
        <div style={styles.productBox}>
            <div>
                <img style={styles.productImg} src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg"/>
            </div>
            <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'start', width : '100%'}}>
                <div style={{display : 'flex'}}>
                    <RoomIcon fontSize='small' style={{color : 'grey'}}/>
                    <Typography style={{color : 'grey', fontSize : '0.8rem'}}>New York</Typography>
                </div>
                <Typography variant='h6' style={{fontSize:'0.9rem', fontWeight : '600'}}>White Casual Sneakers</Typography>
                <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                    <Typography style={{fontWeight : '600'}}>$43.55</Typography>
                    <LocalMall style={{backgroundColor :'#392D79', color : 'white', padding : '4px 10px', borderRadius : '5px', fontSize : '1.2rem'}}/>
                </div>
            </div>
        </div>
    )
}
