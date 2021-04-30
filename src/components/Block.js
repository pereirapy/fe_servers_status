import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Box,
  Grid
} from "@material-ui/core";

const Block = ({ data: {attributes: {data, index}} }) => {
  return (
    <Grid item xs={12} >
      <Box bgcolor="text.disabled" p={2}>
        <Typography component="div" variant="body1" >
          <Box color="primary.main">{index}</Box>
          <Box color="text.primary">{data}</Box>
        </Typography>
      </Box>
    </Grid>
  );
};


Block.propTypes = {
  data: PropTypes.shape({
    attributes: PropTypes.shape({
      data: PropTypes.string,
      index: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default Block;
