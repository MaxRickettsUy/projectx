import Avatar from '@material-ui/core/Avatar'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  rootDark: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'black',
    color: 'white'
  },
  listItemText: {
    marginLeft: 10
  },
  starDark: {
    color: 'white'
  }
});

class LeftDrawerItems extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, darkMode } = this.props;

    return (
      <div className={darkMode ? classes.rootDark: classes.root}>
        <List
          component="nav"
        >
          <ListItem button onClick={this.handleClick}>
            <Avatar src={require(darkMode ? '../img/garage-bandWhite.png' : '../img/garage-band.png')}/>
            <ListItemText className={classes.listItemText} primary="Bands" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <StarBorder className={darkMode ? classes.starDark : null}/>
                </ListItemIcon>
                <ListItemText primary="Alphabetical" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <StarBorder className={darkMode ? classes.starDark : null}/>
                </ListItemIcon>
                <ListItemText primary="Subgenre" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <StarBorder className={darkMode ? classes.starDark : null}/>
                </ListItemIcon>
                <ListItemText primary="Country" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <Avatar src={require(darkMode ? '../img/vinylWhite.png' : '../img/vinyl.png')}/>
            <ListItemText className={classes.listItemText} primary="Labels" />
          </ListItem>
          <ListItem button>
            <Avatar src={require(darkMode ? '../img/documentWhite.png' : '../img/document.png')}/>
            <ListItemText className={classes.listItemText} primary="Reviews" />
          </ListItem>
          <Divider />
          <ListItem button>
            <Avatar src={require(darkMode ? '../img/question-markWhite.png' : '../img/question-mark.png')}/>
            <ListItemText className={classes.listItemText} primary='Random Band' />
          </ListItem>
        </List>
      </div>
    );
  }
}

LeftDrawerItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawerItems);
