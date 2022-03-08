import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './style.css';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import Api from '../../utils/api.js';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const submitForm = async values => {
        let requestObject = {
            email: values.login,
            password: values.password,
        }
        let response = await Api.login(requestObject);
        console.log(response);
        if(response === true){
            navigate('teste')
        }
    }

    const mainFormik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: submitForm,
    })

    return (
            <div className='sideBar'>
                <form onSubmit={mainFormik.handleSubmit}>
                    <Grid container direction="column" alignItems="center" columns={{ xs: 2, md: 2}} spacing={1}>
                        <div className='header'>
                            <h3>Login</h3>
                        </div>
                        <Grid item className='inputs'>
                            <Grid item xs={22} className='login'>
                                <TextField 
                                    id="login" 
                                    label="Email" 
                                    variant="outlined" 
                                    className='text'
                                    value={mainFormik.values.login || ''}
                                    onChange={e => {
                                        mainFormik.handleChange(e);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={22} className='login'>
                                <TextField 
                                    id="password" 
                                    type='password' 
                                    label="Password" 
                                    variant="outlined" 
                                    className='text'
                                    value={mainFormik.values.password || ''}
                                    onChange={e => {
                                        mainFormik.handleChange(e);
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Button variant='contained' type='submit'>Login</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
    )
}

export default Login;