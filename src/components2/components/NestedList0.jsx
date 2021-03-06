import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import PlaceIcon from "@material-ui/icons/Place";

import {observer} from 'mobx-react'
import {toJS} from 'mobx'
import {appState} from './AppState'

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class NestedList extends React.Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getChilds=(par)=>{
      if(!appState.pts)
        return null
      console.log('childs',    toJS(appState.pts)
        .filter(x => x.parent == par)
    )
    const { classes } = this.props;
    return(
    toJS(this.props.pts)
    .filter(x => x.parent == par)
    .map((x, i) => (
        <div>
<Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>        
          </div>
    )
    ))

  }

  render() {
    const { classes } = this.props;
    console.log('rNL',toJS(this.props.appState))
    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Объекты</ListSubheader>}
        >
          {/* <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Drafts" />
          </ListItem>

          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem> */}

          {/* <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse> */}

          {this.props.appState.objects.map((x, i) => 
          <div>
            <ListItem button onClick={this.handleClick}>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText inset primary={x} />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <div>
          {this.getChilds(x)}
          </div>
          </div>
          )}
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
