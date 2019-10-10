import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import {BrowserRouter ,Route, Link, Switch} from 'react-router-dom';

class RightDrawerItems extends React.Component {
  render() {
    const {darkMode} = this.props
    
    //retrieve most recently updated bands from api
    //and replace array with
    const bands = ['Siege', 'Bane', '7 Seconds'] 

    return(
      <React.Fragment>
        <List component='nav'>
          <ListItem>
            <ListItemText primary="Recently Updated" />
          </ListItem>
          <Divider/>
          {
            bands.map(band => {
              const link = `/bands/${band}`
              return (
                <Link to={link}>
                  <ListItem button>
                    <Avatar src={require(darkMode ? '../img/garage-bandWhite.png' : '../img/garage-band.png')}/>
                    <ListItemText style={{marginLeft: 10}} primary={band} />
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