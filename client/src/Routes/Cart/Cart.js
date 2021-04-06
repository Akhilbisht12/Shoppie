import React from 'react'
import Header from '../../Components/Header/Header';
import {Button, Typography, Grid, Checkbox, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Cart() {
    const [value, setValue] = React.useState('Free');
    const [payvalue, setPayValue] = React.useState('CC');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChangePayment = (event) => {
        setPayValue(event.target.value);
    };
    return (
        <div>
            <Header/>
            <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}}>
                <div style={{width : '80%'}}>
                    <div style={{display : 'flex', alignItems : 'center'}}>
                        <Typography variant='h6' style={{fontWeight : '600'}}>Shopping Cart</Typography>
                        <Button
                            style={{backgroundColor : 'white', margin : '1rem 0'}}
                            startIcon={<ArrowRightAltIcon />}
                        >Continue Shopping
                        </Button>
                    </div>
                    <Grid container xs={12}>
                        <Grid item xs={9}>
                            <Grid container xs={12}>
                                <Grid item xs={10}>
                                    <Typography style={{color : 'grey'}}>Product</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography style={{color : 'grey'}}>Item</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography style={{color : 'grey'}}>Price</Typography>
                                </Grid>
                            </Grid>
                            <div>
                                {/* first product in cart */}
                                <Grid style={{backgroundColor : 'lightgrey', padding : '1rem', borderRadius : '10px', alignItems : 'center', margin : '1rem 0'}} container xs={12}>
                                    <Grid item xs={10}>
                                        <div style={{display : 'flex'}}>
                                            <Checkbox
                                                defaultChecked
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <img style={{width : '5rem', margin : '0 2rem'}} src='https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg'/>
                                            <div>
                                                <Typography style={{fontSize : '0.8rem', color : 'grey'}}>In Stock</Typography>
                                                <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Puma Axis TR Boot casual Man</Typography>
                                                <div style={{display : 'flex', justifyContent : 'space-between'}}>
                                                    <Typography>Color : <strong>Black</strong></Typography>
                                                    <Typography>Shoe Size : <strong>42</strong></Typography>
                                                </div>
                                            </div>   
                                        </div>
                                    </Grid>
                                    <Grid style={{display : 'flex', justifyContent : 'center'}} item xs={1}>
                                        <div>
                                            +1-
                                        </div>                                    
                                    </Grid>
                                    <Grid item xs={1}>
                                        <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                                            <Typography>$238</Typography>
                                            <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'space-between'}}>
                                                <FavoriteBorderIcon/>
                                                <DeleteIcon/>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                                {/* second product in cart */}
                                <Grid style={{backgroundColor : 'lightgrey', padding : '1rem', borderRadius : '10px', alignItems : 'center', margin : '1rem 0'}} container xs={12}>
                                    <Grid item xs={10}>
                                        <div style={{display : 'flex'}}>
                                            <Checkbox
                                                defaultChecked
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <img style={{width : '5rem', margin : '0 2rem'}} src='https://image.freepik.com/free-photo/black-canvas-shoes-isolated-white-space-with-clipping-path_192913-22.jpg'/>
                                            <div>
                                                <Typography style={{fontSize : '0.8rem', color : 'grey'}}>In Stock</Typography>
                                                <Typography style={{fontSize : '1rem', fontWeight : '600'}}>Puma Axis TR Boot casual Man</Typography>
                                                <div style={{display : 'flex', justifyContent : 'space-between'}}>
                                                    <Typography>Color : <strong>Black</strong></Typography>
                                                    <Typography>Shoe Size : <strong>42</strong></Typography>
                                                </div>
                                            </div>   
                                        </div>
                                    </Grid>
                                    <Grid style={{display : 'flex', justifyContent : 'center'}} item xs={1}>
                                        <div>
                                            +1-
                                        </div>                                    
                                    </Grid>
                                    <Grid item xs={1}>
                                        <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                                            <Typography>$238</Typography>
                                            <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'space-between'}}>
                                                <FavoriteBorderIcon/>
                                                <DeleteIcon/>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <Grid container xs={12}>
                                    <Grid item xs={10}>
                                        <Typography style={{fontWeight : '600'}}>Continue Shipping : </Typography>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                <FormControlLabel value="Free" control={<Radio />} label="Free" />
                                                <FormControlLabel value="Fast" control={<Radio />} label="Speed Delivery ($20 extra)" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                                            <Typography style={{color : 'grey', fontSize : '0.8rem'}}>Subtotal (2 items):</Typography>
                                            <Typography>$456</Typography>
                                        </div>
                                        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                                            <Typography style={{color : 'grey', fontSize : '0.8rem'}}>Shipping:</Typography>
                                            <Typography>$6</Typography>
                                        </div>
                                        <div style={{width : '100%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                                            <Typography style={{color : 'grey', fontSize : '0.8rem'}}>Cart Total:</Typography>
                                            <Typography style={{fontWeight : '600'}}>$462</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid style={{padding : '1.5rem'}} item xs={3}>
                            <Typography>Jhon, the last step remained !</Typography>
                            <FormControl style={{margin : '1rem 0'}} component="fieldset">
                            <FormLabel component="legend">Payment Method:</FormLabel>
                            <RadioGroup aria-label="Payment" name="payment1" value={payvalue} onChange={handleChangePayment}>
                                <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                                <FormControlLabel value="CC" control={<Radio />} label="Credit Card" />
                                <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                            </RadioGroup>
                            </FormControl>
                            <div>
                                <Button style={{width : '100%'}} variant='contained' color = 'primary'>
                                    <div style={{display : 'flex', justifyContent : 'space-between', width : '100%'}}>
                                        <Typography>Checkout</Typography>
                                        <Typography style={{fontWeight : '600'}}>$462</Typography>
                                    </div>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
