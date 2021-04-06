import React, {useState} from 'react'
import Header from '../../Components/Header/Header';
import Grid from '@material-ui/core/Grid';
import { Typography,Avatar, Button, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import RedeemIcon from '@material-ui/icons/Redeem';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function Profile() {
    const [value, setValue] = useState(0)
    const styles = {
        box : {
            border : '1px solid lightgrey',
            margin : '0 0.5rem',
            borderRadius : '10px',
            display : 'flex',
            alignItems : 'center',
            flexDirection : 'column',
            height : '100%'
        }
    }
    return (
        <div style={{height : '100%'}}>
            <Header/>
            <div style={{margin : '2rem 0', height : '80%'}}>
                <Grid style={{height : '100%'}} justify='center' spacing={3} container xs={12}>
                    <Grid style={styles.box} item xs={2}>
                        <Avatar alt="user" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" style={{width : '5rem', height : '5rem'}} />
                        <Typography>Jhon Doe</Typography>
                        <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.5} />
                        <Typography style={{fontSize : '0.8rem', color : '#392D79'}}>Profile is 54% complete</Typography>
                        <div style={{display : 'flex', alignItems : 'start',flexDirection : 'column'}}>
                        <Button
                            style={{backgroundColor : 'white', margin : '1rem 0'}}
                            startIcon={<PersonIcon />}
                        >
                            Personal Details
                        </Button>
                        <Button
                            style={{backgroundColor : 'white', margin : '1rem 0'}}
                            startIcon={<PaymentIcon />}
                        >
                            Payments
                        </Button>
                        <Button
                            style={{backgroundColor : 'white', margin : '1rem 0'}}
                            startIcon={<RedeemIcon />}
                        >
                            Orders
                        </Button>
                        <Button
                            style={{backgroundColor : 'white', margin : '1rem 0'}}
                            startIcon={<SettingsIcon />}
                        >
                            Settings
                        </Button>
                        </div>
                    </Grid>
                    <Grid container style={styles.box} item xs={7}>
                        <div style={{display : 'flex', alignItems : 'center', justifyContent : 'start', width : '100%'}}>
                            <Button
                                variant = 'outlined'
                                style={{backgroundColor : 'white', margin : '1rem 0'}}
                                startIcon={<ArrowBackIosIcon />}
                            >
                                Back
                            </Button>
                            <Typography style={{margin : '0 2rem', fontWeight : '600'}} variant='h6'>Account Setting</Typography>
                        </div>
                        <div style={{width : '100%', display : 'flex', justifyContent : 'space-evenly'}}>
                            <Button
                                variant = 'contained'
                                style={{backgroundColor : 'white', margin : '1rem 0'}}
                            >
                                Contact Details
                            </Button>
                            <Button
                                variant = 'contained'
                                style={{backgroundColor : 'white', margin : '1rem 0'}}
                            >
                                Profile Details
                            </Button>
                            <Button
                                variant = 'contained'
                                style={{backgroundColor : 'white', margin : '1rem 0'}}
                            >
                                Profile Reviews
                            </Button>
                            <Button
                                variant = 'contained'
                                style={{backgroundColor : 'white', margin : '1rem 0'}}
                            >
                                Ohter Information
                            </Button>
                        </div>
                        <div style={{width : '95%', border : '1px solid lightgrey', padding : '10px', borderRadius : '10px'}}>
                            <Typography>Edit Profile</Typography>
                            <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between', width : '100%'}}>
                                <div style={{width : '40%'}}>
                                    <TextField
                                    id="outlined-full-width"
                                    label="Email"
                                    style={{ margin: 8 }}
                                    placeholder="Jhon Doe"
                                    helperText=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    />
                                </div>
                                <div style={{width : '40%'}}>
                                    <TextField
                                    id="outlined-full-width"
                                    label="Phone"
                                    style={{ margin: 8 }}
                                    placeholder="+1 89723145"
                                    helperText=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    />
                                </div>
                            </div>
                            <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between', width : '100%'}}>
                                <div style={{width : '40%'}}>
                                    <TextField
                                    id="outlined-full-width"
                                    label="Email"
                                    style={{ margin: 8 }}
                                    placeholder="Jhon Doe"
                                    helperText=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    />
                                </div>
                                <div style={{width : '40%'}}>
                                    <TextField
                                    id="outlined-full-width"
                                    label="Phone"
                                    style={{ margin: 8 }}
                                    placeholder="+1 89723145"
                                    helperText=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    />
                                </div>
                            </div>
                            <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between', width : '100%'}}>
                                <div style={{width : '40%'}}>
                                    <TextField
                                    id="outlined-full-width"
                                    label="Email"
                                    style={{ margin: 8 }}
                                    placeholder="Jhon Doe"
                                    helperText=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    />
                                </div>
                                <div style={{width : '40%'}}>
                                    <TextField
                                    id="outlined-full-width"
                                    label="Phone"
                                    style={{ margin: 8 }}
                                    placeholder="+1 89723145"
                                    helperText=""
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    />
                                </div>
                            </div>
                            <Button variant='contained' color='primary'>Save</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
