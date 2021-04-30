import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Grid,
} from "@material-ui/core";
import Block from "./Block";

const Blocks = ({ node, blocks: { loading, error, list}, getNodeBlocks }) => {
  if(!loading && !error && list.length === 0)
  {
    getNodeBlocks(node)
    return <Typography>Initializing...</Typography>
  }
  else if(loading && !error && list.length === 0)
  {
    return <Typography>Loading...</Typography>
  }
  else if(error)
  {
    return <Typography>Error: {JSON.stringify(error)}</Typography>
  }
  return (
    <Grid container spacing={1}>
      {list.map((data, index) => <Block key={index} data={data} /> )}
    </Grid>
  );
};



Blocks.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  blocks: PropTypes.object.isRequired,
  getNodeBlocks: PropTypes.func.isRequired,
};

export default Blocks;
