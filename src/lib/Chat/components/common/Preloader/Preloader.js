import Box from '../Box';
import React from 'react';
import Loader from '../../../assets/loader.gif';

const Preloader = () => {
  return (
    <Box align="center" justify="center">
      <img src={Loader} />
    </Box>
  );
};
export default Preloader;
