import Avatar from '@material-ui/core/Avatar'
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

export const recentlyUpdated = (
  <div>
    <ListItem>
      <ListItemText primary="Recently Updated" />
    </ListItem>
  </div>
);

export const bands = (
  <div>
    <ListItem button>
      <Avatar src={require('../img/garage-band.png')}/>
      <ListItemText primary="Siege" />
    </ListItem>
    <ListItem button>
      <Avatar src={require('../img/garage-band.png')}/>
      <ListItemText primary="Bane" />
    </ListItem>
    <ListItem button>
      <Avatar src={require('../img/garage-band.png')}/>
      <ListItemText primary="7 Seconds" />
    </ListItem>
  </div>
);
