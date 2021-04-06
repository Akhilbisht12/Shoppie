import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { Avatar, Button, Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Header from '../../Components/Header/Header';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function SingleProduct() {
    const useStyles = makeStyles((theme) => ({
        link: {
          display: 'flex',
          fontSize : '0.8rem'
        },
        icon: {
          marginRight: theme.spacing(0.5),
          width: 16,
          height: 16,
        },
        ImgContainer : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            width : '100%',
            height : '30rem',
            border : '1px solid lightgrey',
            borderRadius : '10px'
        },
        ImgThumbnail : {
            border : '1px solid lightgrey',
            margin : '0 0.5rem',
            borderRadius : '10px'
        },
        marginTopBottom : {
            margin : '2rem 0'
        },
        priceContainer : {
            border : '1px solid lightgrey',
            borderRadius : '10px',
            padding : '1rem'
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        btn : {
            margin : '0.5rem 0'
        }
      }));
      
      function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
      
        const classes = useStyles();
    return (
        <div>
            <Header/>
            <div style={{padding : '5px 10px', border : '1px solid lightgrey'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        Home
                    </Link>
                    <Link
                        color="inherit"
                        href="/getting-started/installation/"
                        onClick={handleClick}
                        className={classes.link}
                    >
                        <WhatshotIcon className={classes.icon} />
                        Products
                    </Link>
                    <Typography color="textPrimary" className={classes.link}>
                        <GrainIcon className={classes.icon} />
                        Single Product
                    </Typography>
                </Breadcrumbs>
            </div>
            <div>
                <Grid justify='space-evenly' style={{margin : '1rem 0'}} container>
                    <Grid xs={1}></Grid>
                    <Grid xs={7}>
                        <Typography variant='h5'>
                            White Casual Shoes
                        </Typography>
                        <div className={classes.ImgContainer}>
                            <img style={{width : '20rem'}} src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg"/>
                        </div>
                        <div>
                            <Grid justify='center' container spacing={1} style={{margin : '1rem 0'}}>
                                <Grid justify='center' container item xs={2} className={classes.ImgThumbnail}>
                                    <img style={{width : '5rem'}} src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg"/>
                                </Grid>
                                <Grid justify='center' container item xs={2}  className={classes.ImgThumbnail}>
                                    <img style={{width : '5rem'}} src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg"/>
                                </Grid>
                                <Grid justify='center' container item xs={2}  className={classes.ImgThumbnail}>
                                    <img style={{width : '5rem'}} src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg"/>
                                </Grid>
                                <Grid justify='center' container item xs={2}  className={classes.ImgThumbnail}>
                                    <img style={{width : '5rem'}} src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg"/>
                                </Grid>
                                <Grid justify='center' container item xs={2}  className={classes.ImgThumbnail}>
                                    <img style={{width : '5rem'}} src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg"/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.marginTopBottom}>
                            <Typography variant='h6'>Details</Typography>
                            <Grid container justify='space-between'>
                                <Grid item xs={5}>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Brand</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Nike</Typography>
                                    </div>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Variant</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Black</Typography>
                                    </div>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Warranty</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>1 Year</Typography>
                                    </div>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Brand</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Nike</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={5}>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Brand</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Nike</Typography>
                                    </div>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Variant</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Black</Typography>
                                    </div>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Warranty</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>1 Year</Typography>
                                    </div>
                                    <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                        <Typography style={{color : 'grey'}}>Brand</Typography>
                                        <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Nike</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.marginTopBottom}>
                            <Typography variant='h6'>Description</Typography>
                            <Typography variant='body2'>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                        </div>
                        <hr style={{color : 'lightgrey'}}/>
                        <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                            <Typography style={{color : 'grey'}}>Share</Typography>
                            <Typography style={{fontSize : '1rem', fontWeight : '600'}}><FacebookIcon/><InstagramIcon/><TwitterIcon/><WhatsAppIcon/></Typography>
                        </div>
                    </Grid>
                    <Grid item xs={3} spacing={2}>
                        <div className={classes.priceContainer}>
                            <div style={{display : 'flex', justifyContent : 'space-between', margin : '0.5rem 0'}}>
                                <Typography style={{fontSize : '1rem', fontWeight : '600'}}>$120</Typography>
                                <Typography style={{color : 'grey'}}>category</Typography>
                            </div>
                            <div style={{display : 'flex', justifyContent : 'start', margin : '0.5rem 0'}}>
                                <Avatar alt="Remy Sharp" src="https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg" className={classes.large} />
                                <div>
                                    <Typography style={{color : 'grey', fontSize:'0.8rem'}}>Jhon Doe</Typography>
                                    <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.5} />
                                    <Typography style={{color : 'grey', fontSize:'0.8rem'}}>Verified Buyer</Typography>
                                </div>
                            </div>
                            <div style={{display : 'flex', alignItems : 'center', flexDirection : 'column'}}>
                                <a href='#'>
                                    <Typography style={{color : 'grey', fontSize:'0.8rem'}}>See Other Users & Reviews</Typography>
                                </a>
                                <Button className={classes.btn} variant="contained" color="primary">
                                    Add To Cart
                                </Button>
                                <Button className={classes.btn} variant="outlined" color="primary">
                                    Add To Whishlist
                                </Button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Grid>
                    <Grid itemxs={1}></Grid>
                </Grid>
            </div>
            
        </div>
    )
}
