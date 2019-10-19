import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
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

  componentDidMount = () => {
    this.props.getAlbumsForBand(this.props.bandName)
  }

  render(){
    const {albums, bandName, classes, darkMode} = this.props

    const bandLogo = '/img/logo/' + bandName.toLowerCase() + '.jpg'

    return(
      <main className={darkMode ? classes.contentDark : classes.content}>
        <div style={{width: '100%', height: 50}} />
        <Paper className={darkMode ? classes.paperDark : classes.paper}>
          <Grid container spacing={3} justify='center'>
            <Grid item xs={12}>
              <Grid container justify='center'>
                <img src={bandLogo} alt={bandName}/>
              </Grid>
            </Grid>
            <Grid item>{bandName}</Grid>
          </Grid>
        </Paper>
        <Paper className={darkMode ? classes.paperDark : classes.paper}>
          <Grid container spacing={3}>
            {
              albums === undefined ? 
                <CircularProgress />
                :
                albums.map(album => {
                  const link = `/albums/${bandName}/${album.albumName}`
                  const cover = '/img/covers/' + bandName.toLowerCase() + '_' + album.albumName.toLowerCase().replace(/\s/g, '') + '.jpg'
                  return (
                    <Grid key={album.albumName} item xs={4}>
                      <Grid container justify='center' style={{marginTop: 10}}>
                        <Link to={link}>
                          <img onClick={() => {this.props.setCurrentAlbum(album)}} src={cover} alt={album.albumName} style={{width: 300, height: 300}}/>
                        </Link>
                        <p>{album.albumName} ({album.year})</p>
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