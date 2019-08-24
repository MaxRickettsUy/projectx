import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => {
  return{

  }
}

class RightDrawerItems extends React.Component {
  state = {

  }

  render() {
    const {classes, darkMode} = this.props

    return(
      <div>
        <List component='nav'>
        <ListItem>
          <ListItemText primary="Recently Updated" />
        </ListItem>
        <Divider/>
        <ListItem button>
          <Avatar src={require(darkMode ? '../img/garage-bandWhite.png' : '../img/garage-band.png')}/>
          <ListItemText style={{marginLeft: 10}} primary="Siege" />
        </ListItem>
        <ListItem button>
          <Avatar src={require(darkMode ? '../img/garage-bandWhite.png' : '../img/garage-band.png')}/>
          <ListItemText style={{marginLeft: 10}} primary="Bane" />
        </ListItem>
        <ListItem button>
          <Avatar src={require(darkMode ? '../img/garage-bandWhite.png' : '../img/garage-band.png')}/>
          <ListItemText style={{marginLeft: 10}} primary="7 Seconds" />
        </ListItem>
        </List>
      </div>
    )
  }
}

export default (withStyles(styles)(RightDrawerItems))