import AlbumPage from './AlbumPage'
import Grid from '@material-ui/core/Grid'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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

class BandPage extends React.Component {
  state = {
    darkMode: false
  }

  stringSpaces = (value) => {
    return value.replace(/\s/g, '');
  }

  render(){
    const {classes, darkMode} = this.props

    //replace with band prop
    const band = 'Siege'


    //replace with album information for band from api
    const albums = [
      {
        name: 'Drop Dead', 
        year: 1984
      },
      {
        name: 'Lost Session 91',
        year: 2014
      }
    ]

    return(
      <main className={darkMode ? classes.contentDark : classes.content}>
        <div style={{width: '100%', height: 50}} />
        <Paper className={darkMode ? classes.paperDark : classes.paper}>
          <Grid container spacing={3} justify='center'>
            <Grid item xs={12}>
              <Grid container justify='center'>
                <img src={'/img/logo/siege.jpg'} alt='Siege'/>
              </Grid>
            </Grid>
            <Grid item>{band}</Grid>
          </Grid>
        </Paper>
        <Paper className={darkMode ? classes.paperDark : classes.paper}>
          <Grid container spacing={3}>
            {
              albums.map(album => {
                const link = `/albums/${band}/${album.name}`
                const cover = '/img/covers/' + band.toLowerCase() + '_' + album.name.toLowerCase().replace(/\s/g, '') + '.jpg'
                return (
                  <Grid item xs={4}>
                    <Grid container justify='center' style={{marginTop: 10}}>
                      <Link to={link}>
                        <img src={cover} alt={album.name} style={{width: 300, height: 300}}/>
                      </Link>
                      <p>{album.name} ({album.year})</p>
                    </Grid>
                  </Grid>
                )
              })
            }
          </Grid>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(BandPage)