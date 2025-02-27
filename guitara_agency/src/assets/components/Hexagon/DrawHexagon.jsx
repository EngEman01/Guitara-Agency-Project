import React, { Component } from "react";
import Hexagon from "react-hexagon";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  foreignObject: {
    position: "absolute", // changed from relative to absolute
    width: "100%",
    height: "100%",
    display: "flex", // ensuring children inside it are properly aligned
    justifyContent: "center",
    alignItems: "center",
  },
  hexTitleStyle: {
    fontFamily: "arial",
    textAlign: "center",
    fontSize: "45px",
    fontWeight: "bold"
  }
});

class DrawHexagon extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Hexagon style={{ stroke: "white", fill: "#A1A1A1" }} flatTop>
        <svg className={classes.foreignObject} viewBox="0 0 100 100">
          <foreignObject width="100%" height="100%">
            <Typography gutterBottom className={classes.hexTitleStyle}>
              First Line
              <br />
              Second Line fdjkvnfjvbfjv gjb gfbrgjktbgjt
            </Typography>
          </foreignObject>
        </svg>
      </Hexagon>
    );
  }
}

export default withStyles(styles)(DrawHexagon);
