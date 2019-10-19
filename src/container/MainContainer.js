import AlbumPage from '../component/AlbumPage'
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar'
import BandPage from '../component/BandPage'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid'
import LeftDrawerItems from '../component/LeftDrawerItems'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types';
import React from 'react';
import RightDrawerItems from '../component/RightDrawerItems'
import {getAlbumsForBand} from '../actions/albums'
import {getBands, getBandName} from '../actions/bands'
import Toolbar from '@material-ui/core/Toolbar';
import TopBar from '../component/TopBar'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter ,Route, Link, Switch} from 'react-router-dom';

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
    overflowY: 'scroll',
  },
  contentDark: {
    flexGrow: 1,
    padding: theme.spacing(3),
    minWidth: 0, // So the Typography noWrap works
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
    overflowY: 'scroll'
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
    height: 'auto',
    padding: theme.spacing(3),
    marginBottom: 40
  },
  paperDark: {
    height: 'auto',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white',
    padding: theme.spacing(3),
    marginBottom: 40
  },
  mobilePaper: {
    height: 'auto',
    padding: theme.spacing(3),
    marginBottom: 100
  },
  mobilePaperDark: {
    height: 'auto',
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white',
    padding: theme.spacing(3),
    marginBottom: 100
  },
  paperBand: {
    height: 140,
    width: '100%',
    backgroundColor: 'black',
    border: '1px solid white',
  },
  paperBandImage: {
    height: 140,
    width: '100%',
  }
});

class MainContainer extends React.Component {
  state ={
    darkMode: false,
    currentAlbum: {},
    currentBand: {}
  }

  setDarkMode = () => {
    this.setState({
      ...this.state,
      darkMode: !this.state.darkMode
    })
  }

  setCurrentBand = (bandName) => {
    const band = {
      bandName: bandName
    }
    this.setState({
      ...this.state,
      currentBand : band
    })
  }

  setCurrentAlbum = (album) => {
    this.setState({
      ...this.state,
      currentAlbum: album
    })
  }

  getAlbumPagePath = () => {
    return `/albums/${this.state.currentBand.bandName}/${this.state.currentAlbum.albumName}`
  }

  getBandPagePath = () => {
    return `/bands/${this.state.currentBand.bandName}`
  }

  componentDidMount = () => {
    this.props.getBands()
  }

  render(){
    const isMobile = window.innerWidth <= 500
    const { classes, getBandName } = this.props;
    const { darkMode } = this.state;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <TopBar isMobile={isMobile} darkMode={darkMode} getBandName={getBandName} setDarkMode={this.setDarkMode}/>
          {
            isMobile ?
              <React.Fragment>
                <Switch>
                  <Route exact path='/'>
                    <main className={darkMode ? classes.contentDark : classes.content}>
                      <div className={classes.toolbar} />
                      <Paper className={darkMode ? classes.mobilePaperDark : classes.mobilePaper}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Grid container justify='center'>
                              <Typography>{'Welcome to hardXchives! A hardcore-punk discography and review collection site'}</Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container justify='center'>
                              <Typography noWrap>{'Check out these bands!'}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container justify='center' spacing={2}>
                          <Grid item xs={12}>
                            <Paper className={classes.paperBand}>
                              <Link to='/bands/Siege'>
                                <img
                                  onClick={() => {this.setCurrentBand('Siege')}} 
                                  src={'/img/logo/siege.jpg'} 
                                  alt='Siege' 
                                  className={classes.paperBandImage}
                                />
                              </Link>
                            </Paper>
                          </Grid>
                          <Grid item xs={12}><Paper className={classes.paperBand}/></Grid>
                          <Grid item xs={12}><Paper className={classes.paperBand}/></Grid>
                          <Grid item xs={12}><Paper className={classes.paperBand}/></Grid>
                        </Grid>
                      </Paper>
                    </main>
                  </Route>
                  <Route 
                    exact 
                    path={this.getBandPagePath()} 
                    render={() => {
                      return (
                        <BandPage 
                          setCurrentAlbum={this.setCurrentAlbum} 
                          albums={this.props.albums} 
                          getAlbumsForBand={this.props.getAlbumsForBand} 
                          bandName={this.state.currentBand.bandName} 
                          darkMode={darkMode}
                        />
                      )
                    }}
                  />
                  <Route 
                    exact 
                    path={this.getAlbumPagePath()} 
                    render={() => {
                      return (
                        <AlbumPage 
                          band={this.state.currentBand} 
                          album={this.state.currentAlbum} 
                          darkMode={darkMode}
                        />
                      )
                    }}
                  />
                </Switch>
                <AppBar position='fixed' className={classes.bottomBar}>
                  <Toolbar>
                    <Grid container>
                      <Grid item xs={3}>
                        <Grid container justify='center'>
                          <Button><Avatar src={'/img/garage-bandWhite.png'}/></Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container justify='center'>
                          <Button><Avatar src={'/img/vinylWhite.png'}/></Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container justify='center'>
                          <Button><Avatar src={'/img/documentWhite.png'}/></Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container justify='center'>
                          <Button><Avatar src={'/img/question-markWhite.png'}/></Button>
                        </Grid>
                      </Grid>
                    </Grid>                
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
                <Switch>
                  <Route exact path='/'> 
                    <main className={darkMode ? classes.contentDark : classes.content}>
                      <div style={{width: '100%', height: 50}} />
                      <Paper className={darkMode ? classes.paperDark : classes.paper}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <Grid container justify='center'>
                              <Typography noWrap>{'Welcome to hardXchives! A hardcore-punk discography and review collection site'}</Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container justify='center'>
                              <Typography noWrap>{'Check out these bands!'}</Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container justify='center' spacing={2}>
                              <Grid item xs={3}>
                                <Paper className={classes.paperBand}>
                                  <Link to="/bands/Siege">
                                    <img 
                                      onClick={() => {this.setCurrentBand('Siege')}} 
                                      src={'/img/logo/siege.jpg'} 
                                      alt='Siege' 
                                      className={classes.paperBandImage}
                                    />
                                  </Link>
                                </Paper>
                              </Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container justify='center' spacing={2}>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container justify='center' spacing={2}>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                              <Grid item xs={3}><Paper className={classes.paperBand}/></Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </main>
                  </Route>
                  <Route 
                    exact 
                    path={this.getBandPagePath()} 
                    render={() => {
                      return (
                        <BandPage 
                          setCurrentAlbum={this.setCurrentAlbum} 
                          albums={this.props.albums} 
                          getAlbumsForBand={this.props.getAlbumsForBand} 
                          bandName={this.state.currentBand.bandName} 
                          darkMode={darkMode}
                        />
                      )
                    }}
                  />
                  <Route 
                    exact 
                    path={this.getAlbumPagePath()} 
                    render={() => {
                      return (
                        <AlbumPage 
                          band={this.state.currentBand} 
                          album={this.state.currentAlbum} 
                          darkMode={darkMode}
                        />
                      )
                    }}
                  />
                </Switch>
                <Drawer
                  variant="permanent"
                  classes={{
                    paper: darkMode ? classes.drawerPaperDark: classes.drawerPaper,
                  }}
                  anchor="right"
                  style={{height: '100vh'}}
                >
                  <div className={classes.toolbar} />
                  <RightDrawerItems
                    setCurrentBand={this.setCurrentBand} 
                    getBands={this.props.getBands} 
                    bands={this.props.bands} 
                    albums={this.props.albums} 
                    darkMode={darkMode}
                  />
                </Drawer>
              </React.Fragment>
          }
        </div>
      </BrowserRouter>
    );
  }
}

MainContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
  bands: state.bands.bands,
  albums: state.albums.albums
})

const mapDispatchToProps = (dispatch) => ({
  getBands: () => dispatch(getBands()),
  getBandName: (bandName) => dispatch(getBandName(bandName)),
  getAlbumsForBand: (bandName) => dispatch(getAlbumsForBand(bandName))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainContainer));