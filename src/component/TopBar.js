import Button from '@material-ui/core/Button'
import Create from '@material-ui/icons/Create'
import DarkMode from '@material-ui/icons/InvertColors'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import {withStyles} from '@material-ui/core/styles'
import {BrowserRouter as Router, Route} from 'react-router-dom';

const styles =(theme) => {
  return {
    root: {
      flexGrow: 1
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: 'black'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }
}

class TopBar extends React.Component {
  state = {
    open: false,
  }

  handleDialog = () => {
    this.setState({
      ...this.state,
      open: !this.state.open
    })
  }


  hardChives = () => {
    return (
      <Typography className={this.props.classes.title} noWrap>
        hardXchives
      </Typography>
    )
  }

  render(){
    const {classes, darkMode} = this.props
    const {open} = this.state
    return (
      <Router>
        <div>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Route path='/' exact component={this.hardChives}></Route>
              <Tooltip title='Add new band'>
                <Button 
                  variant='contained' 
                  color='default' 
                  onClick={this.handleDialog}>
                    <Create/>
                </Button>
              </Tooltip>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Tooltip title='Toggle dark mode'><Switch onClick={this.props.setDarkMode}></Switch></Tooltip>
              <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Band</DialogTitle>
                <DialogContent>
                  <DialogContentText></DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Band Name"
                    type="email"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleDialog} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleDialog} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </Toolbar>
          </AppBar>
        </div>
      </Router>
    )
  }
}

export default (withStyles(styles)(TopBar))