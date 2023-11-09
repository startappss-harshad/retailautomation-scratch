import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {data} from './styled';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik/dist';
import { LoginSchema } from './FormikYup';
import { forgotformdata } from '../../store/slices/forgotslice';



const defaultTheme = createTheme();

const  Forgot = ()=> {
  const dispatch = useDispatch()

  const { values,setValues, handleBlur, touched,setTouched, handleChange, handleSubmit, errors, setErrors} = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      debugger;
      console.log('Inside Submit: ', values)
      if (values) {
        dispatch(forgotformdata(values))
        console.log("setValues:", values)
        action.resetForm()
      } else {
        console.log("insideError: ", errors)
      }
    }
  })

  const resetForm = ()=>{
    setValues({email:""})
    setErrors({email:null})
    setTouched({email:null})
  
  }

  const { LoginStyle } = data

  function submitForm(e) {
    console.log(e.target.value);
    e.preventDefault();
    if (values) {
      console.log('insideSubmitform: ', values);
      dispatch(forgotformdata(values));
      resetForm();
    } else {
      console.log(errors);
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <div>
    <LoginStyle>
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box component="form" className='forgotemail' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className='form-error'>{errors.email && touched.email ? (<p >{errors.email}</p>) : null}</div>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitForm}
            >
              Submit
            </Button>
            <Grid container>
              
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </LoginStyle>
    </div>);
}

export default Forgot