import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import {Link} from 'react-router-dom';

class RightDrawerItems extends React.Component {
  render() {
    const {bands, darkMode} = this.props

    return(
      <React.Fragment>
        <List component='nav'>
          <ListItem>
            <ListItemText primary="Recently Updated" />
          </ListItem>
          <Divider/>
          {
            bands === undefined ? 
            <CircularProgress />
            :
            bands.map((band) => {
              const link = `/bands/${band.bandName}`
              return (
                <Link onClick={()=>{this.props.setCurrentBand(band.bandName)}} key={band.bandName} to={link}>
                  <ListItem button>
                    <Avatar src={darkMode ? '/img/garage-bandWhite.png' : '/img/garage-band.png'}/>
                    <ListItemText style={{marginLeft: 10}} primary={band.bandName} />
                  </ListItem>
                </Link>
              )
            })
          }
        </List>
      </React.Fragment>    
    )
  }
}

export default RightDrawerItems