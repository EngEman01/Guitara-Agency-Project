import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import DrawHexagon from "./DrawHexagon";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  hexStyle: {}
});

function HierarchyTile(props) {
  const { classes, agentUpline } = props;

  return (
    <div className={classes.root}>
      <Grid direction="column">
        <Grid container justify="left">
          <Grid item xs={5}>
            <DrawHexagon agentUpline={agentUpline} hexIndex={1} />
          </Grid>
        </Grid>

        <Grid
          justify="left"
          container
          style={{ marginTop: "-16%", marginLeft: "32%" }}
        >
          <Grid item xs={5} spacing={4}>
            <DrawHexagon agentUpline={agentUpline} hexIndex={2} />
            <DrawHexagon agentUpline={agentUpline} hexIndex={3} />
          </Grid>
        </Grid>

        <Grid container justify="left" style={{ marginTop: "-14%" }}>
          <Grid item xs={5}>
            <DrawHexagon agentUpline={agentUpline} hexIndex={4} />
          </Grid>
        </Grid>
      </Grid>
      {/* second group */}
      <Grid direction="column">
        <Grid container justify="left">
          <Grid item xs={5}>
            <DrawHexagon agentUpline={agentUpline} hexIndex={5} />
          </Grid>
        </Grid>

        <Grid
          justify="left"
          container
          style={{ marginTop: "-16%", marginLeft: "32%" }}
        >
          <Grid item xs={5} spacing={4}>
            <DrawHexagon agentUpline={agentUpline} hexIndex={6} />
            <DrawHexagon agentUpline={agentUpline} hexIndex={7} />
          </Grid>
        </Grid>

        <Grid container justify="left" style={{ marginTop: "-14%" }}>
          <Grid item xs={5}>
            <DrawHexagon agentUpline={agentUpline} hexIndex={8} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

HierarchyTile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HierarchyTile);
