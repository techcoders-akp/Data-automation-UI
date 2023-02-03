import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {LogInStyles} from '../Styles'
const LogIn = () => {

  const classes = LogInStyles();
  return (
    <>
      <section>
        <div className={classes.root}>
          <h1>TECH CODERS</h1>

          <span className={classes.WCP}>
            Welcome Dear , Please Login To Your Account From Here
          </span>
          <ArrowCircleRightIcon
            className={classes.arrow}
            htmlFor="emailBox"
          />

          <span className="NAM">Not a Member ?</span>
          <Button variant="contained" className="Sbtn">
            Join Us Now
          </Button>
        </div>

        <div className="FormContainer">
          <div className="formbody">
            <span className="SH">Continue With </span>

            <div className="OSM">
              <div id="gSignInWrapper">
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt=""
                    />
                  </div>
                  <p className="btn-text">
                    <b>GOOGLE</b>
                  </p>
                </div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                      alt=""
                    />
                  </div>
                  <p className="btn-text-fb">
                    <b>FACEBOOK</b>
                  </p>
                </div>
                <h4 style={{ marginTop: '15px' }}>- OR -</h4>
              </div>
            </div>
            <form action="">
              <TextField
                sx={{ m: 2, width: '34ch', marginBottom: '-1px' }}
                id="emailBox"
                type="email"
                label="Email"
                variant="standard"
              />
              <EmailOutlinedIcon className="EmailIcon" />
              <TextField
                sx={{ m: 2, width: '34ch' }}
                id="outlined-basic"
                label="Password"
                variant="standard"
                className="LoginP"
              />

              <VisibilityOutlinedIcon className="EyeOpen" />
              <VisibilityOffOutlinedIcon className="EyeClose" />

              <Button
                sx={{ m: 2, width: '42ch' }}
                variant="contained"
              >
                Log In
              </Button>
              <div className="fplink">
                <span>
                  Forgot your password ? No Worries Just
                  <a href="/forgot_password">
                    {' '}
                    Click Here{' '}
                  </a>{' '}
                  😉
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
