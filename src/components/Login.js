import React, { Component } from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const backgroundShape = require('../images/shape.svg');

const logo = require('../images/logo.svg');

const numeral = require('numeral');
numeral.defaultFormat('0');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary['A100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 10,
    padding: 20,
    paddingBottom: 500,
  },
  grid: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  smallContainer: {
    width: '60%',
  },
  bigContainer: {
    width: '80%',
  },
  logo: {
    marginBottom: 24,
    display: 'flex',
    justifyContent: 'center',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginGrid: {
    width: '25%',
    backgroundColor: '#eeeeee',
    padding: '20px 50px 55px',
    textAlign: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  buttonBar: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.palette.primary['A100'],
    marginTop: '25px',
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing.unit,
  },
  stepper: {
    backgroundColor: 'transparent',
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42,
  },
  formControl: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  loginId: {
    width: '234px',
  },
});

class Login extends Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <div className={classes.loginContainer}>
                  <div className={classes.loginGrid}>
                    <form>
                      <FormControl
                        className={classNames(
                          classes.margin,
                          classes.textField,
                          classes.loginId
                        )}
                      >
                        <InputLabel htmlFor="loginId">Login ID</InputLabel>
                        <Input id="loginId" type="text" />
                      </FormControl>
                      <FormControl
                        className={classNames(
                          classes.margin,
                          classes.textField
                        )}
                      >
                        <InputLabel htmlFor="adornment-password">
                          Password
                        </InputLabel>
                        <Input
                          id="adornment-password"
                          type={this.state.showPassword ? 'text' : 'password'}
                          value={this.state.password}
                          onChange={this.handleChange('password')}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                              >
                                {this.state.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>

                      <Button variant="outlined" className={classes.button}>
                        Login
                      </Button>
                    </form>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Login));
