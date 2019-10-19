import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import React from 'react';
import Typography from '@material-ui/core/Typography'
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

class AlbumPage extends React.Component {
  state = {
    darkMode: false
  }

  render(){
    const {album, band, classes, darkMode} = this.props

    const cover = '/img/covers/' + band.bandName.toLowerCase() + '_' + album.albumName.toLowerCase().replace(/\s/g, '') + '.jpg'
    return(
      <main className={darkMode ? classes.contentDark : classes.content}>
      <div style={{width: '100%', height: 50}} />
      <Paper className={darkMode ? classes.paperDark : classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container justify='center'>
              <img src={cover} alt={band.bandName} style={{height: 300, width: 300}}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={darkMode ? classes.paperDark : classes.paper}>
        <Typography>Track list:</Typography>
        {
          album.tracks.map((track, index) => {
            return (
              <p key={track}>{index+1}. {track}</p>            
            )
          })
        }
      </Paper>
    </main>
)
  }
}

export default withStyles(styles)(AlbumPage)