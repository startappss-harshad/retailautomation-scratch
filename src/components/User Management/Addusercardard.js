
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';


export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleManageUserClick = () => {
    setExpanded(!expanded);
  };
  const handleUploadPhoto = (event) => {

    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Add User Card
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Card sx={{ minHeight: '60vh', overflow: 'auto' }}>
          <CardHeader
            title="Add New User"
            sx={{ backgroundColor: 'blue' }}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Surname"
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  label="Primary Email"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Secondary Email"
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Phone Number"
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'blue' }}>
                  <Button variant="Standard" onClick={handleManageUserClick}>
                    Manage User's Password,Organisation unit and profile photo
                  </Button>
                </Box>
              </Grid>
              {expanded && (
                <React.Fragment>
                  <Grid item xs={6}>
                    <TextField
                      label="Organisation Unit"
                      variant="standard"
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="upload-photo"
                        type="file"
                        onChange={handleUploadPhoto}
                      />
                      <label htmlFor="upload-photo" style={{ cursor: 'pointer' }}>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                          <PhotoCamera />
                        </IconButton>
                        <Typography variant="body2" sx={{ marginLeft: 1, color: 'blue' }}>
                          Upload Photo
                        </Typography>
                      </label>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6"> Create Password</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Password"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      type="password"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Confirm Password"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      type="password"
                    />
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
          </CardContent>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" color="secondary" sx={{ marginRight: 2 }} onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Add New User
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}

