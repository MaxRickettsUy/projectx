import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List'
import LeftDrawerItems from '../component/LeftDrawerItems'
import Paper from '@material-ui/core/Paper'
import RightDrawerItems from '../component/RightDrawerItems'
import TopBar from '../component/TopBar'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    display: 'flex',
  },
  bottomBar: {
    background: 'black',
    bottom: 0,
    top: 'auto'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100vh',
  },
  drawerPaperDark: {
    backgroundColor: 'black',
    color: 'white',
    position: 'relative',
    width: drawerWidth,
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    minWidth: 0, // So the Typography noWrap works
    height: '100vh',
  },
  contentDark: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minWidth: 0, // So the Typography noWrap works
    height: '100vh',
    backgroundColor: 'black',
    color: 'white'
  },
  toolbar: theme.mixins.toolbar,
  rightDrawer: {
    leftPadding: 50
  },
  rightDrawerDark: {
    leftPadding: 50,
    backgroundColor: 'black',
    color: 'white'
  },
  inputRoot: {
    color: 'inherit',
  },
  paper: {
    height: '88%',
  },
  paperDark: {
    height: '88%',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white'
  },
  mobilePaper: {
    height: '82%'
  },
  mobilePaperDark: {
    height: '82%',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white'
  }
});

class MainContainer extends React.Component {
  state ={
    darkMode: false
  }

  setDarkMode = () => {
    this.setState({
      ...this.state,
      darkMode: !this.state.darkMode
    })
  }

  render(){
    const isMobile = window.innerWidth <= 500
    const { classes } = this.props;
    const { darkMode } = this.state;
    return (
      <div className={classes.root}>
        <TopBar setDarkMode={this.setDarkMode}/>
        {
          isMobile ?
            <React.Fragment>
              <main className={darkMode ? classes.contentDark : classes.content}>
                <div className={classes.toolbar} />
                <Paper className={darkMode ? classes.mobilePaperDark : classes.mobilePaper}>
                  <Typography noWrap>{'Welcome to hardXchives! A hardcore-punk discography and review collection site'}</Typography>
                  <Typography noWrap>{'Welcome to hardXchives! A hardcore-punk discography and review collection site'}</Typography>
                </Paper>
              </main>
              <AppBar position='fixed' className={classes.bottomBar}>
                <Toolbar>
                  <Typography color="inherit" noWrap/>
                </Toolbar>
              </AppBar>
            </React.Fragment>
          :
            <React.Fragment>
              <Drawer
                variant="permanent"
                classes={{
                  paper: darkMode ? classes.drawerPaperDark: classes.drawerPaper,
                }}
                style={{height: '100vh'}}
              >
                <div className={classes.toolbar} />
                <LeftDrawerItems darkMode={darkMode}/>
              </Drawer>
              <main className={darkMode ? classes.contentDark : classes.content}>
                <div className={classes.toolbar} />
                <Paper className={darkMode ? classes.paperDark : classes.paper}>
                  <Typography noWrap>{'Welcome to hardXchives! A hardcore-punk discography and review collection site'}</Typography>
                  <Typography noWrap>{'Welcome to hardXchives! A hardcore-punk discography and review collection site'}</Typography>
                </Paper>
              </main>
              <Drawer
                variant="permanent"
                classes={{
                  paper: darkMode ? classes.drawerPaperDark: classes.drawerPaper,
                }}
                anchor="right"
                style={{height: '100vh'}}
              >
                <div className={classes.toolbar} />
                <RightDrawerItems darkMode={darkMode}/>
              </Drawer>
            </React.Fragment>
        }
      </div>
    );
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainContainer);
