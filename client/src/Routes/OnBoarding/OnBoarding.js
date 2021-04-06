import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopIcon from '@material-ui/icons/Shop';

export default function OnBoarding() {
    const [terms, setTerms] = useState('true')
    const [remember, setRemember]= useState('true')
    const styles = {
        grid1 : {
            backgroundColor : '#392D79',
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'space-around',
            color : 'white'
        },
        grid2 : {
            display : 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'center'
        }
    }
    return (
        <div style={{height : '100%'}}>
            <Grid style ={{height : '100%'}} container>
                <Grid style={styles.grid1} item xs={3}>
                    <h1 style={{fontSize : '2rem'}}>Shoppie</h1>
                    <img style={{height : '12rem'}} src={process.env.PUBLIC_URL + '/assets/svg/onboarding_1.svg'}/>
                    <p>Delivers to your address</p>
                </Grid>
                <Grid style={styles.grid2} item xs={9}>
                    <div style={{width : '60%'}}>
                        <Button variant="outlined" color="default">
                            Back
                        </Button>
                        <h1 style={{fontSize : '1.5rem'}}>Welcome</h1>
                        <p style={{color : 'grey'}}>We dont spam you. Your details are safe</p>
                        <TextField
                            id="outlined-full-width"
                            label="Email"
                            style={{ margin: 8 }}
                            placeholder="Jhondoe@gmail.com"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
                        <TextField
                            id="outlined-full-width"
                            label="Password"
                            style={{ margin: 8 }}
                            placeholder="Jhon@sydney896"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
                        <div>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={terms}
                                    onChange={()=>{setTerms(!terms)}}
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Terms & Conditions"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={remember}
                                    onChange={()=>{setRemember(!remember)}}
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Remember Me"
                            />
                        </div>
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                        <div style={{display : 'flex',flexDirection : 'column',justifyContent : 'center', alignItems : 'center', width : '100%'}}>
                            <div style={{display : 'flex', alignItems : 'center'}}>
                                <p>Dont have an account ?</p>
                                <a href="#" style={{textDecoration:'none'}}> Register Now</a>
                            </div>
                            <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center', width : '100%'}}>
                                <p>Or sign up with</p>
                                <div style={{display : 'flex', justifyContent : 'space-evenly', width : '100%'}}>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<ShopIcon/>}
                                    >
                                        Google
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<FacebookIcon/>}
                                    >
                                        Facebook
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}