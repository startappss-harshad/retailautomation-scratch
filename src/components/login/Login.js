import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik/dist';
import { LoginSchema } from './FormikYup';
import { loginformdata } from '../../store/slices/loginslice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {data} from './styled';
 


const defaultTheme = createTheme();

const Login=()=> {

  const dispatch = useDispatch()
  const { LoginStyle } = data

  const { values,setValues, handleBlur, touched,setTouched, handleChange, handleSubmit, errors, setErrors} = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      debugger;
      console.log('Inside Submit: ', values)
      if (values) {
        dispatch(loginformdata(values))
        console.log("setValues:", values)
        action.resetForm()
      } else {
        console.log("insideError: ", errors)
      }
    }
  })
  //   console.log("error:",errors)
  //   console.log("values :",values)
  //   const handleChange = e => {
  //     SetinitialValues(state => 
  //         ({...state,
  //          [e.target.name]: e.target.value}))
  //   };

const resetForm = ()=>{
  setValues({email:"",password:""})
  setErrors({email:null,password:null})
  setTouched({email:null,password:null})

}

  function submitForm(e) {
    console.log(e.target.value);
    e.preventDefault();
    if (values) {
      console.log('insideSubmitform: ', values);
      dispatch(loginformdata(values));
      resetForm();
    } else {
      console.log(errors);
    }
  }






  return (<LoginStyle>
  <div className='containers'>
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" className='forgotemail' onSubmit={handleSubmit}  sx={{ mt: 1 }}>
            {/* <form sx={{ mt: 1}}> */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}

              />
              <div className='form-error'>{errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}</div>

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className='form-error'>{errors.password && touched.password ? (<p >{errors.password}</p>) : null}</div>

              <FormControlLabel sx={{ display: "flex" }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={submitForm}
                type='submit'
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs sx={{ display: "flex" }}>
                <NavLink to="/forgot" variant="body2">
               Forgot password ??
                   
                </NavLink>
                </Grid>
                {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
              {/* <Copyright sx={{ mt: 5 }} /> */}
              {/* </form> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
    </LoginStyle>
  );
}

export default Login